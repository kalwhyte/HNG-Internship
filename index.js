#!/usr/bin/node

import express from 'express';

let app = express();

app.get('/api', (req, res, next) => {
  // getting the slack name from the query
  let slackName = req.query.slack_name;
  // getting the track from the query param
  let track = req.query.track;
  let date = new Date();
  res.json({
    slack_name: slackName,
    // To get the day name
    current_day: date.toLocaleString('en-US', { weekday: 'long' }),

    utc_time: date.toISOString().split('.')[0] + 'Z',
    track: track,
    github_file_url:
      'https://github.com/kalwhyte/HNG-Internship/blob/master/index.js',
    github_repo_url: 'https://github.com/kalwhyte/HNG-Internship',
    status_code: res.statusCode,
  });
});
// getting the port from env or defaulting to 80
const port = process.env.PORT | 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
