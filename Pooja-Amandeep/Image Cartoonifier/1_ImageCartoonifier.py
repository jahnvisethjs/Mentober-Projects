#STEP ONE: INSTALLING THE NECESSARY LIBRARIES
import cv2 #for image processing
import easygui #to open the file choosing filebox
import numpy as np #to store the image to be cartoonified
import imageio #to read image stored at a particular path
import sys
import matplotlib.pyplot as plt
import os
import tkinter as tk
from tkinter import filedialog
from tkinter import *
from PIL import ImageTk, Image

#STEP TWO: DESIGNING THE WINDOW THAT OPENS ON RUNNING THE PROGRAM
top=tk.Tk()
top.geometry('400x400')
top.title('Cartoonify!')
top.configure(background='white')
label=Label(top,background='#CDCDCD',font=('caibri',18,'bold'))

#STEP THREE: CREATING THE FUNCTION THAT WILL HELP CHOOSE THE FILE FROM THE SYSTEM
def upload():
    ImagePath=easygui.fileopenbox()
    cartoonify(ImagePath)

#STEP FOUR: CREATING THE FUNCTION TO CONVERT THE ORIGINAL IMAGE TO CARTOONIFIED IMAGE
def cartoonify(ImagePath):
    # read the image
    originalImage = cv2.imread(ImagePath)
    originalImage = cv2.cvtColor(originalImage, cv2.COLOR_BGR2RGB)
    #print(image)  # image is stored in form of numbers

    # confirm that image is chosen
    if originalImage is None:
        print("Can not find any image. Choose appropriate file")
        sys.exit()

    ReSized1 = cv2.resize(originalImage,(960,540))

    #STEP FIVE - MAKING ALL THE CONVERSIONS
    #converting the image to grayScale
    grayScaleImage = cv2.cvtColor(originalImage,cv2.COLOR_BGR2GRAY)
    ReSized2 = cv2.resize(grayScaleImage,(960,540))
    #applying median blur to smoothen the image
    smoothGrayScale = cv2.medianBlur(grayScaleImage,5)
    ReSized3 = cv2.resize(smoothGrayScale,(960,540))
    #retrieving the edges for cartoon effect by using thresholding technique
    getEdge = cv2.adaptiveThreshold(smoothGrayScale,255,cv2.ADAPTIVE_THRESH_MEAN_C,cv2.THRESH_BINARY,9,9)
    ReSized4 = cv2.resize(getEdge,(960,540))
    #applying bilateral filter to remove noise and keep edges sharp as required
    colorImage = cv2.bilateralFilter(originalImage,9,300,300)
    ReSized5 = cv2.resize(colorImage,(960,540))
    #masking edged image with our beutified image
    cartoonImage=cv2.bitwise_and(colorImage,colorImage,mask=getEdge)
    ReSized6=cv2.resize(cartoonImage,(960,540))

    #STEP SIX: PLOTTING THE ENTIRE TRANSITION
    images=[ReSized1,ReSized2,ReSized3,ReSized4,ReSized5,ReSized6]
    fig,axes = plt.subplots(3,2,figsize=(8,8),subplot_kw={'xticks':[],'yticks':[]},gridspec_kw=dict(hspace=0.1,wspace=0.1))
    for i,ax in enumerate(axes.flat):
        ax.imshow(images[i],cmap='gray')

    save1=Button(top,text="Save cartoonified image",command=lambda:save(ReSized6,ImagePath),padx=30,pady=5)
    save1.configure(background='#364156',foreground='white',font=('calibri',10,'bold'))
    save1.pack(side=TOP,pady=50)

    plt.show()

#STEP SEVEN: SAVING THE IMAGE USING IMWRITE
def save(ReSized6,ImagePath):
    newName="Cartoonified_image"
    path1 = os.path.dirname(ImagePath)
    extension = os.path.splitext(ImagePath)[1]
    path = os.path.join(path1,newName+extension)
    cv2.imwrite(path,cv2.cvtColor(ReSized6,cv2.COLOR_RGB2BGR))
    I="Image Saved by Name"+newName+"at"+path
    tk.messagebox.showinfor(title=None,message=I)

#STEP 8: DESIGNING THE UPLOAD BUTTON
upload = Button(top,text="Cartoonify an Image",command=upload,padx=10,pady=5)
upload.configure(background='#364156',foreground='white',font=('calibri',12,'bold'))
upload.pack(side=TOP,pady=50)

top.mainloop()
