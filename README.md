# tee-time-to-cost

A small application to outline how much more/less it would cost per person to move the rate at which groups of golfers tee off on a golf course.

### Things needed:

- First tee time of the day
- Last tee time of the day
- Cost of the tee time for 1 person
- Time between tee times

### Things wanted:

- When does twilight play start/when does the price drop in the evening?

### The Math

```
Time from first tee time to last tee time in minutes / time between tee times = number of tee times for the day
Number of tee times * 4 (assuming full group) = total money made by course in 1 day.
Total / number of tee times = cost per tee time.
Show cost per individual if you add/remove 1, 2, 3 minutes to the time between tee times.
```
