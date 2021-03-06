# -*- coding: utf-8 -*-
"""Lab 3 - List.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/19SmaU_AV3D5TH-WtNKgSBso3rcnjZZf0

# 1.Random List
"""

import random

data=[random.randint(0,10) for i in range(50)]
i=0
for ele in data:
  if(i<11):
    num=int(i)
    print(num,': ',data.count(i))
    i += 1
  else:
    break

"""# 2.Count All Hastags"""

import random
from collections import Counter

tokens=[]
file=open('CH3Thailand Posts.csv','r')
lines=file.readlines()
data=[line.split() for line in lines]
for i in data :
  for j in i :
    if '#' in j:
       tokens.append(j)
print(Counter(tokens).most_common())

"""# 3.Sorted PM2.5"""

file=open('pm25.csv','r')
lines=file.readlines()
pm_value=[int(line.split(',')[1].strip()) for line in lines if '-' not in line.split(',')[1]] 
new=sorted(pm_value,reverse=True)
for e in new:
  print(e)

"""# 4.Show a graph and find the intersection"""

import matplotlib.pyplot as plt
import numpy as np

x=[i for i in np.arange(-5,5,0.1)]
y1=[3*x1*x1*x1+2*x1*x1-x1+5 for x1 in x]
y2=[2*x1*x1-1.5*x1-10 for x1 in x]
lowest=abs(y1[0]-y2[0])
xvalue=0
for j in range(1,len(x)):  
  ans=abs(y1[j]-y2[j])
  if(ans < lowest):
    lowest = ans
    xvalue=x[j]
  
print(xvalue)
plt.plot(x,y1,'navy')
plt.plot(x,y2,'orange')

