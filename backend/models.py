from exts import db 


"""
class Recipe:
    id: int primary key
    title:str
    description:str (text)
"""


class Recipe(db.Model):
    id=db.Column(db.Integer(),primary_key=True)
    title=db.Column(db.String(),nullable=True)
    description=db.Column(db.Text(),nullable=True)
    full_name = db.Column(db.String(100), nullable=False)
    cin = db.Column(db.String(50), nullable=False, unique=True)
    phone_number = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(120), nullable=False, unique=True)
    age = db.Column(db.Integer(), nullable=False)
    gender = db.Column(db.String(10), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    city = db.Column(db.String(50), nullable=False)
    address = db.Column(db.Text(), nullable=False)
    marital_status = db.Column(db.String(20), nullable=False)
    nbr_of_children = db.Column(db.Integer(), default=0)
    occupation = db.Column(db.String(100), nullable=False)
    salary = db.Column(db.Float(), nullable=False)


    
    def __repr__(self):
        return f"<Recipe {self.title} >"
    
    
    def save(self):
        db.session.add(self)
        db.session.commit()
        
    def delete(self):
        db.session.delete(self)
        db.session.commit()
        
    def update(self, title, description, full_name, cin, phone_number, email, age, gender, state, city, address, marital_status, nbr_of_children, occupation, salary): 
        self.title = title
        self.description = description
        self.full_name = full_name
        self.cin = cin
        self.phone_number = phone_number
        self.email = email
        try:
            self.age = int(age)  # Ensuring age is an integer
        except ValueError:
            raise ValueError("Age must be an integer")
        self.gender = gender
        self.state = state
        self.city = city
        self.address = address
        self.marital_status = marital_status
        self.nbr_of_children = int(nbr_of_children)
        self.occupation = occupation
        self.salary = float(salary)  # Ensuring salary is a float

        db.session.commit()  
        
#user model

"""class User:
    id:integer
    username:string  
    email:string
    password:string
"""
class User(db.Model):
    id=db.Column(db.Integer,primary_key =True)
    username=db.Column(db.String(25),nullable=False,unique=True)
    email=db.Column(db.String(80),nullable=False)
    password=db.Column(db.Text(),nullable=False) 
    
    
    
    def save(self):
        db.session.add(self)
        db.session.commit()
    
    
    def __repr__(self):
        return f"<User {self.username}>"
    
