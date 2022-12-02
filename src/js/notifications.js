import toastr from 'toastr';

toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: 'toast-top-right',
  preventDuplicates: true,
  onclick: null,
  showDuration: '300',
  hideDuration: '800',
  timeOut: '5000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'slideDown',
  hideMethod: 'slideUp',
};
export function notificationSuccess(message) {
  toastr.success(message);
}
export function notificationWarning(message) {
  toastr.warning(message);
}

export function notificationError(message) {
  toastr.error(message);
}
