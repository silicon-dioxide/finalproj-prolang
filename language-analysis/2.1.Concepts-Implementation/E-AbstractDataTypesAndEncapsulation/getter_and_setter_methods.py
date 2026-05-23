class Course:
    def __init__(self, title):
        self._title = title

    def get_title(self):
        return self._title

    def set_title(self, title):
        self._title = title


course = Course("Programming Languages")
print(course.get_title())
course.set_title("Software Engineering")
print(course.get_title())
