export const validateName = (name: string) => {
  if (name.length < 20) {
    alert("Tên phải lớn hơn hoặc bằng 20 ký tự");
    return false;
  }
  return true;
};

export const validateEmail = (valueToValidate: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(valueToValidate)) {
    return true;
  } else {
    alert("Email không đúng cú pháp");
    return false;
  }
};

export const validateMssv = (mssv: string) => {
  if (mssv.length < 5) {
    alert("Mã số sinh viên phải lớn hơn hoặc bằng 5");
    return false;
  }
  return true;
};

// export const validateAddress = (address: string) => {
//   if (address.trim.length == 0) {
//     return false;
//   }
//   return true;
// };
