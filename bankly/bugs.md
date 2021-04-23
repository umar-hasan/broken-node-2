# BUG #1 
* ```user.admin``` is always undefined in ```auth.js```.

# BUG #2 
* ```getAll``` method within the ```user.js``` model contains a ```username``` and ```password``` parameter.

# BUG #3 
* ```authUser``` function does not return an error if no token is found.

# BUG #4 
* ```User.delete``` is not ```await```ed in the users route.
