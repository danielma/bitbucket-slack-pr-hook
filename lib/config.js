'use strict';

require('dotenv').load();

module.exports = {
    port: Number(process.env.PORT) || 5000,
    channel: '#' + process.env.SLACK_CHANNEL, // Slack channel without # prefix
    username: process.env.SLACK_USERNAME || 'MyAwesomeBot',
    hook_url: process.env.SLACK_HOOK_URL
};
