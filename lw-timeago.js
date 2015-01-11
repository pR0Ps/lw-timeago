var lw_timeago = {

  config: {
    suffixAgo: "ago",
    suffixFromNow: "from now",
    seconds: "less than a minute",
    minute: "about a minute",
    minutes: "about %d minutes",
    hour: "about an hour",
    hours: "about %d hours",
    day: "about a day",
    days: "about %d days",
    month: "about a month",
    months: "about %d months",
    year: "about a year",
    years: "about %d years",
  },
      
  inWords: function(distanceMillis) {
    // Produce a string representing the milliseconds in a human-readable way

    var suffix = distanceMillis < 0 ? this.config.suffixFromNow : this.config.suffixAgo;
    var seconds = Math.abs(distanceMillis) / 1000;
    var minutes = seconds / 60;
    var hours = minutes / 60;
    var days = hours / 24;
    var years = days / 365;

    function substitute(string, number) {
      return string.replace(/%d/i, number);
    }

    var words =
      seconds < 45 && substitute(this.config.seconds, Math.round(seconds)) ||
      seconds < 90 && substitute(this.config.minute, 1) ||
      minutes < 45 && substitute(this.config.minutes, Math.round(minutes)) ||
      minutes < 90 && substitute(this.config.hour, 1) ||
      hours < 24 && substitute(this.config.hours, Math.round(hours)) ||
      hours < 42 && substitute(this.config.day, 1) ||
      days < 30 && substitute(this.config.days, Math.round(days)) ||
      days < 45 && substitute(this.config.month, 1) ||
      days < 365 && substitute(this.config.months, Math.round(days / 30)) ||
      years < 1.5 && substitute(this.config.year, 1) ||
      substitute(this.config.years, Math.round(years));

    return words + " " + suffix;
  },

  distance: function(timestamp) {
    // Get the number of milliseconds distance from the current time
    return Date.now() - timestamp;
  },

  doReplace: function(){
    // Go over all <time> elements, change enclosed absolute time to a relative time,
    // and set the absolute time as the title so hovering will display it.

    var times = document.getElementsByTagName("time")
    for (var i = 0; i < times.length; i++){

      var datetime = times[i].attributes.getNamedItem("datetime");
      if (!datetime)
        break;

      var parsed = Date.parse(datetime.value);
      if (parsed) {
        times[i].title = times[i].innerHTML;
        times[i].innerHTML = this.inWords(this.distance(parsed));
      }
    }
  }
};
