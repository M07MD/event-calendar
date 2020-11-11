$("#tempust").tempust({
  date: new Date("2020/11/12"),
  offset: 1,
  events: {
    "2017/12/12": $("<div>jQueryScript Event</div>"),
    "2020/11/12": $(
      "<div>demo demo demo demo demo demo demo demo demo demo demo demo demo</div>"
    ),
    "2020/11/13": $(
      "<div>demo demo demo demo demo demo demo demo demo demo demo demo demo</div>"
    ),
  },
});
