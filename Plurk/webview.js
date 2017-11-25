module.exports = (Franz, options) => {
  function getMessages() {
    let count = document.querySelector('#noti_count').textContent * 1;
    let count_indirect = document.querySelector('#noti_re_count').textContent * 1;
    Franz.setBadge(count, count_indirect);
  }
  Franz.loop(getMessages);
};
