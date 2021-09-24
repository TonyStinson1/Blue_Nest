import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// toaster message call
function successToast(message){
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT
  });
  return;
}

function warningToast(message){
  toast.warn(message, {
    position: toast.POSITION.TOP_RIGHT
  });
  return;
}
function errorToast(message){
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT
  });
  return;
}

export default {
  successToast,
  warningToast,
  errorToast
};
