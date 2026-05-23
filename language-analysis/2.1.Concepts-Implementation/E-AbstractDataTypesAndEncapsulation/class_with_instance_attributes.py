class Student:
    def __init__(self, name, year):
        self.name = name
        self.year = year


student = Student("Cedric", 2)
print(student.name, student.year)
