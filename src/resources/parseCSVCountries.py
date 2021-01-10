import csv
import json

csvfile = open('countries.csv', 'r')
jsonfile = open('countries.json', 'w')

# populates countries.json with data
fieldnames = ("country", "region")
reader = csv.DictReader(csvfile, fieldnames)
for row in reader:
        
    newDict = {}
    newDict.setdefault(row["country"], row["region"])

    json.dump(newDict, jsonfile)
    jsonfile.write('\n')

csvfile.close()
jsonfile.close()

# manipulates data to add commas
# Open File
file1 = open('countries.json', 'r') 
Lines = file1.readlines()
file1.close() 

# open write file
file2 = open('countries.json', 'w') 

for line in Lines:
    correctedline = line[1:len(line)-2]
    file2.write(correctedline)
    file2.write(",\n")

file2.close()