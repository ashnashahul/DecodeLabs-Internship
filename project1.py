password = input("Enter password: ")

score =0

if len(password) >= 8:
   score+=1

if any(char.isupper() for char in password):
   score+=1

if any(char.isdigit() for char in password):
   score+=1

symbols ="!@#$%^&*()_+-=[]{}|;:',.<>?/"
if any(char in symbols for char in password):
   score+=1

if score <= 1:
   print("weak password")
elif score <=3:
   print("medium password")
else:
   print("strong password")