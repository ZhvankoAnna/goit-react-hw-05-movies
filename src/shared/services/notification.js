import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notification = message => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export default notification;
