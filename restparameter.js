function saveAddress(street, city, state, ...restOfAddress) {
    console.log(street, city, restOfAddress.join(' '))
  }
  saveAddress(
    '123 Street', 
    'NYC', 
    'New York', 
    'Address 1', 
    '123456', 
    'US'
);

