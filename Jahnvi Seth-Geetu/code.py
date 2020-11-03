#importing libraries which are required
import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import confusion_matrix
from sklearn.metrics import accuracy_score
from sklearn.metrics import precision_score


#reading dataset
dataset= pd.read_csv("breast_cancer_data.csv")

#to check if any null value exists
#print(dataset.isnull().any())

#encoding text data to 0 and 1
lab= LabelEncoder()
dataset['diagnosis']= lab.fit_transform(dataset['diagnosis'])

#splitting dataset in dependent and independent variables
x=dataset.iloc[:,2:32].values #all columns
y=dataset.iloc[:,1:2].values # columns for which result needs to be predicted

#shaping y values 
y=y.ravel()

#splitting dataset into training and testing data
x_train, x_test, y_train, y_test= train_test_split(x,y,test_size=0.20, random_state=0)

#performing feature scaling on data to standardize the range of independent
#variables which is basically transform all our variables into the same scale
sc= StandardScaler()
x_train= sc.fit_transform(x_train)
x_test= sc.fit_transform(x_test)

classifier= DecisionTreeClassifier()

#fitting data in decision tree classifier and making prediction
classifier.fit(x_train, y_train) #training our model
y_pred= classifier.predict(x_test) #predicted values


#print(y_pred)
#printing results on screen
count_m=0
count_b=0
for i in range(len(y_pred)):
   if(y_pred[i]==1):
       #print("M")
       count_m=count_m + 1
   else:
      #print("B")
      count_b=count_b + 1
      
#printing metrics
print("Number of Malignant cancer predicted", count_m)
print("\n")
print("Number of Benign cancer predicted", count_b)
print("\n")
print("Confusion matrix \n", confusion_matrix(y_test, y_pred))
print("\n")
print("Accuracy score ", accuracy_score(y_test, y_pred))
print("\n")
print("precision ", precision_score(y_test, y_pred))

