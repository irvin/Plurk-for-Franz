module.exports = (Franz, options) => {
  function getMessages() {
    count = document.querySelector('#noti_count').textContent * 1;
    count_indirect = document.querySelector('#noti_re_count').textContent * 1;
    Franz.setBadge(count, count_indirect);
  }
  Franz.loop(getMessages);
}
