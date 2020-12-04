/*
Given a valid (IPv4) IP address, return a defanged version of that IP address.
A defanged IP address replaces every period "." with "[.]".
example:
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
*/
const defangIPaddr = function(address) {
  return address.replace(/\./g,"[.]")
};
