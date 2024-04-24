import { toast } from 'sonner';


export const SnackBarUtlities = {
  success(mssg: string, duration = 4000) {
    toast.success(mssg, { duration: duration })
  },
  error(mssg: string, duration = 4000) {
    toast.error(mssg, { duration: duration })
  },
  warning(mssg: string, duration = 4000) {
    toast.warning(mssg, { duration: duration })
  },
  info(mssg: string, duration = 4000) {
    toast.info(mssg, { duration: duration })
  }
}