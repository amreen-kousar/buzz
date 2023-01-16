// ----------------------------------------------------------------------
let userDetails = localStorage?.getItem('userDetails')
userDetails = JSON.parse(userDetails)
console.log("userrrr",userDetails)

const account = {
  displayName: `${userDetails?.first_name} ${userDetails?.last_name}`,
  email: 'demo@minimals.cc',
  photoURL: userDetails?.profile_pic,
};
export default account;
