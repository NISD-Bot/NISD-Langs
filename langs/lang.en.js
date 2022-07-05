/*
    File della lingua del BOT NISD,
    @Authors: @Polliog#7772 | 𝓝𝓪𝓴𝓪𝓶𝓸𝓽𝓸 𝓢𝓱𝓲𝓰𝓮𝓽𝓸𝓴𝓲#0016
    @Translated by: @Toofu#0001 | Corrected by @TeknoSenpai#0957

    Note per tradurre questo file:
    - Non modificare il nome dei metodi, delle variabili, delle funzioni
    - Non modificare gli autori
    - Tradurre totalmente il file (anche le annotazioni)
 */


const lang = {
    lang: "en", // Lang of the file
    //GENERAL BOT WORDS: Translate them also following the capital letters
    maintenance: "Maintenance",
    message: "Message",
    messages: "Messages",
    examples: "Examples",
    site: "Site",
    support_discord: "Support server",
    aliases: "Aliases",
    changes_saved: 'Updated settings',
    cmd_done: "Command Executed",
    author: "Author",
    reason: "Reason",
    reason_not_provided: "Not provided",
    user: "User",
    users: "Users",
    page: "Page",
    moderation: "Moderation",
    settings: "Settings",
    utility: "Utility",
    active: "Enabled",
    not_active: "Disabled",
    report: "Report",
    nothing: "None",
    action: "Action",
    limit: "Limit",
    time: "Time",
    changes: "Changes",
    actions: "Actions",
    measure: "Measure",
    actual_mode: "Actual mode",
    mode: "Mode",
    role: "Role",
    title: "Title",
    position: "Position",
    channel: "Channel",
    type: "Type",
    allowed: "Allowed",
    color: "Color",
    hoist: "Hoist",
    pexs: "Permissions",
    content: "Content",
    integration: "Integration",
    old: "Old",
    new: "New",
    description: "Description",
    invite: "Invite",
    previous_channel: "Previous channel",
    not_allowed: "Not Allowed",
    embed_message: "Embed message",
    external_message: "External Message",
    category: "Category",
    support_role: "Support Role",
    joined_at: "Joined at",
    created_at: "Created at",
    server_deaf: "Deaf",
    server_mute: "Mute",
    //Useful actions
    to_add: "to Add",
    to_remove: "to Remove",
    // Interaction Replies
    interaction_success: "Action completed",
    //ERRORS
    bot_error: "An internal error occurred, a report of the error will be automatically sent to the developers",
    error: "Error",
    insufficient_permissions: "Insufficient permissions",
    invalid_user: "Invalid user",
    invalid_member: "Invalid member!",
    invalid_role: "Invalid role!",
    invalid_channel: "Invalid channel!",
    invalid_permission: "Bot lacks permission:",
    no_basic_permissions: "Bot lacks basic permissions, such as sending embedded links and sending messages",
    no_user_permission: "To use command you must have permission:",
    owner_restriction: "Only server owner can execute this command",
    owner_restriction_plus: "Only the owner of the server or someone with a `manager` role can run this command",
    command_not_found: "Command not found",
    user_not_found: "User not found",
    /*
        time_left: unix timestamp
        cmd: command
     */
    cmd_cooldown: (time_left, cmd) => {
        return `You can reuse the command \`${cmd}\` <t:${time_left}:R>` // use <t:> for time (discord timestamp)
    },
    already_banned: "The user is already banned",
    actual_channel: "Current channel",
    not_banned: "The user is not banned",
    cant_ban: "I cannot ban this user",
    cant_kick: "I cannot ban this user",
    user_rank_equal: "The selected user is of greater or equal rank to you",
    invalid_mute_role: "The selected `mute` role is invalid or non-existent, please reset it via `setmuterole [@Role/ID]`",
    member_not_manageable: "The BOT cannot perform actions on this user",
    warn_not_exists: "Warn does not exist",
    no_warns: "The user has no warns",
    bad_syntax: "Incorrect command composition, please check that you have used the quotes etc. correctly",
    message_too_long: "The content exceeds 256 characters",
    maximum_ticket_panels_reached: "You have reached the limit of available panels",
    tickets_channel_error_user: "The ticket cannot be created at the moment",
    tickets_channel_error_logs: "A ticket could not be opened due to insufficient permissions",
    tickets_channel_closed_logs: "An error occurred while closing the ticket",
    /*
        time: timestamp unix
     */
    ticketsInt_rateLimit: (time) => `You can redo this action: \t<t:${time}:R\>`,
    ticketsInt_alreadyClosed: `The ticket is already closed`,
    ticketsInt_transcriptAlreadySent: "The transcript of the ticket has already been requested before.",
    //HELP (command)
    not_in_dm: "Not available in DMS",
    i_cant_write_you: "I can't write you into the DMS, open them or add `-h` to the end of the command.",
    help_sent: "I sent you the list in DMS",
    help_title: "NISD commands",
    help_description: "To check a specific section or command use `help [Section/Command]`.\n" +
        "If you want this command to be shown in chat rather than DMS, add `-h` to the end of the command. So `help -h` or `help moderation -h`",
    arguments_legend: "**Parameter legend**:\n" +
        "`[]` - Means the parameter is mandatory.\n" +
        "`()` - Means the parameter is optional.\n" +
        "`{}` - Conditional argument, Only required in certain cases.\n" +
        "`1 | 2 | 3` - Choose between these options.\n" +
        "`[@User/ID]` The parameter can be either the tag or the id in a user.\n" +
        "**Do not add the symbols {}, [], () and emoji to the command**",
    cmd_utilize: "Using the command",
    not_configured: "`Not configured`",
    actual_role: "Current role",
    time_format: "Time formatting",
    moderation_description: "*Keep your server secure and watch what happens*",
    automoderation_description: "*Keep your server secure automatically*",
    automation_description: "*Automize bot functions*",
    settings_description: "*Configure NISD via commands*",
    utility_description: "*Useful commands that I don't know how to classify*",
    info_description: "*Get information about the bot, users, servers etc.*",
    //TIME,
    year: "Year",
    years: "Years",
    month: "Month",
    months: "Months",
    day: "Day",
    days: "Days",
    hour: "Hour",
    hours: "Hours",
    minute: "Minute",
    minutes: "Minutes",
    second: "Second",
    seconds: "Seconds",
    duration: "Duration",
    //AVATAR
    avatar_use: "avatar (@User/ID)",
    avatar_description: "Displays the avatar of the selected user or bot",
    avatar_small_desc: "Display the avatar of the selected user or bot",
    avatar_examples: "`avatar @Polliog`\n `avatar ID`",
    required_by: (user) => {
        return `Required by ${user.username}#${user.discriminator}`
    },
    avatar_of: (user) => {
        return `Avatar of ${user.username}#${user.discriminator}`
    },
    //USERINFO
    userinfo_use: "user (@User/ID)",
    userinfo_description: "Display information about a user",
    userinfo_small_desc: "Displays information about a user",
    userinfo_examples: "`user ID`\n`user @Polliog`",
    info_of: (member) => {
        return `Info of ${member.user.username} | ${member.user.id}`
    },
    name: "Name",
    mention: "Mention",
    status: "Status",
    created: "Account Created",
    entered: "Entered the server",
    yes: "Yes",
    no: "No",
    roles: "Roles",
    no_role: "No roles",
    //SERVERINFO
    icon: "icon",
    region: "Region",
    categories: "Categories",
    text_channels: "Text Channels",
    voice_channels: "Voice Channels",
    members: "Members",
    channels: "Channels",
    server_use: "server",
    server_description: "Displays server information",
    server_small_desc: 'Displays server information',
    //SAY
    say_use: "say [Message]",
    say_description: "Make the bot repeat a message",
    say_examples: "`say hello world`",
    //BUG
    bug_sent: "Bug report sent!",
    bug_use: "bug [message]",
    bug_description: "Report a bug to our support team (minimum 50 characters)\n" +
        "Please include as much detail as possible in your report\n" +
        ":warning: **Warning** any misuse of the command will lead to consequences!",
    bug_small_desc: 'Report an error to our support team',
    bug_examples: "`bug The warn command gives me this error...`",
    bug_min_chars: "The message must be at least 50 characters long",
    //INVITE
    invite_content: "Thank you for your interest in the bot",
    invite_me: "Invite me",
    //MANAGER
    manager_use: "manager [@Role/ID/None]",
    manager_description: "Set a role that can change settings reserved only for the server owner, use `none` to remove the role.\n" +
        "The `manager` role is also automatically bypassed by AntiNuke" +
        "\n\n :warning: **Use command with caution, BOT staff will not take responsibility for any damage to the server**",
    manager_small_desc: "Sets a role that can change settings reserved only for the owner",
    manager_examples: "`manager @⚡ | Administrator `\n" +
        "`manager 589443292673081385`\n" +
        "`manager none`",
    manager_saved: (role) => {
        return `\Manager\` role set. **New role**: ${role}`
    },
    manager_removed: "\`Manager\` role deleted",
    //CLEAR
    clear_use: "clear [number]",
    clear_description: "Clear a number of messages in a channel. **[Max. 1000]**",
    clear_small_desc: "Clear a number of messages in a channel",
    clear_examples: "`clear 1000`",
    max_messages: "You can delete a maximum of 100 messages at a time",
    clear_done: (number) => {
        return `<a:accepted_gif:742023278071119913> Deleted \`${number}\` messages`
    },
    //BAN
    ban_use: "ban [@User/ID] (time) (reason) (-c)",
    ban_description: "Ban a user from the server permanently or for a specific time, add to `-c` command to also delete user's messages" +
        " sent in the last 7 days. If you want to temporarily ban a user, format the time as `3h 16m 8s` for 3 hours, 16 minutes and 8 seconds" +
        "\nll command also works for users not present on the server",
    ban_small_desc: "Ban a user from the server, time optional",
    ban_examples: "`ban @User`\n" +
        "`ban ID flood -c`\n" +
        "`ban @User 1d causes annoyance`\n",
    user_banned: "User banned",
    user_banned_dm: (guild) => {
        return `You have been banned by ${guild.name}`
    },
    ban_timeout: "Ban expired",
    ban_timeout_dm: (guild) => {
        return `Your ban on ${guild.name} has expired, you may now re-join the server`
    },
    //unban
    unban_use: "unban [@User/ID] (reason)",
    unban_small_desc: "Unban a user from the server",
    unban_description: "Unban a user from the server so that it can be re-entered",
    unban_examples: "`unban @User`" +
        "\n`unban ID opls wrong person`",
    user_unbanned: "User Unbanned",
    user_unbanned_dm: (guild) => {
        return `You have been unbanned by ${guild.name}`
    },
    //kick
    kick_use: "kick [@User/ID] (reason) (-c)",
    kick_description: "Kick a user off the server, add `-c` to also delete messages sent by the user in the last 7 days",
    kick_small_desc: "Expel a user from the server",
    kick_examples: "`kick ID`" +
        "\n`kick @User -c`" +
        "\n`kick @User annoys in voice`" +
        "\n`kick @User spams in main chat -c`",
    user_kicked: "User expelled",
    user_kicked_dm: (guild) => {
        return `You have been kicked by ${guild.name}`
    },
    //mute
    mute_use: "mute [@User/ID] (time) (reason)",
    mute_description: "Mutes a user so that he can no longer speak. " +
        "If you want to temporarily mute a user format the time as `3h 16m 8s` for 3 hours, 16 minutes and 8 seconds. " +
        "The user will remain mutated even if he leaves and re-enters the server.\n" +
        "**Please note that with servers with a custom default role the command may not work due to overriding permissions**",
    mute_small_desc: "Mute a user, time optional",
    mute_examples: "`mute ID`\n" +
        "`mute @User`\n" +
        "`mute @User 15m stop spamming`\n" +
        "`mute @User continuously annoys in voice chat`",
    user_muted: "Muted User",
    user_muted_dm: (guild) => {
        return `You have been mutated to ${guild.name}`
    },
    mute_timeout: "Mute expired",
    mute_timeout_dm: (guild) => {
        return `You are no longer muted on ${guild.name}, you can go back to talking in the server`
    },
    //unmute
    unmute_use: "unmute [@User/ID] (reason)",
    unmute_description: "Unmute a user so that it can talk in the server again",
    unmute_small_desc: "Unmutes a user in the server",
    unmute_examples: "`unmute ID`\n" +
        "`unmute @User`\n" +
        "`unmute @User wrong person, sorry <3`",
    user_unmuted: "User Unmuted",
    user_unmuted_dm: (guild) => {
        return `You have been unmuted on ${guild.name}`
    },
    //muterole
    muterole_use: "muterole [@Role/ID] (-n)",
    muterole_description: "Set the role to use for the `mute` command\n" +
        "**:warning: Using this command the BOT will try to set the role in all channels on the server, to avoid this add `-n` to the command**",
    muterole_small_desc: "Set the role to use for the `mute` command",
    muterole_examples: "`muterole ID`\n" +
        "`muterole @Role`\n" +
        "`muterole @Rule -n`",
    muterole_saved: (role) => {
        return `Role \mute\` set. **New role**: ${role}`
    },
    //warn
    warn_use: 'warn [@User/ID] (reason)',
    warn_description: 'warn a user',
    warn_small_desc: 'warn a user',
    warn_examples: "`warn ID`\n" +
        "`warn @User stop spamming`",
    user_warned: "User Warned",
    user_warned_dm: (guild) => {
        return `You have been warned on ${guild.name}`
    },
    //unwarn
    unwarn_use: "unwarn [@User/ID] [Number] (Reason)",
    unwarn_description: "Remove a warning from a user, to find the number of a warning use `warnings [@User]`",
    unwarn_small_desc: "Remove a warning from a user",
    unwarn_examples: "`unwarn ID 1`" +
        "`unwarn @User 2`\n" +
        "`unwarn @User 2 I forgive you bro`",
    user_unwarned: "Warn deleted",
    user_unwarned_dm: (guild) => {
        return `Warn deleted on ${guild.name}`
    },
    //clearwarn
    clearwarns_use: "clearwarns [@User/ID] (Reason)",
    clearwarns_description: "Clear all warnings given to a user",
    clearwarns_small_desc: "Clear all warnings for a user",
    clearwarns_examples: "`clearwarns ID`\n" +
        "`clearwarns @User`\n" +
        "`clearwarns @User you have taken forgiveness`",
    user_clearwarns: "Warns totally deleted",
    user_clearwarns_dm: (guild) => {
        return `Warns totally deleted on ${guild.name}`
    },
    //warnings
    warnings_use: "warnings [@User/ID] (page)",
    warnings_description: "Watch warnings for a specific user",
    warnings_small_desc: "Watch warnings for a specific user",
    warnings_examples: "`warnings ID\n`" +
        "`warnings ID 2`\n" +
        "`warnings @Polliog`\n" +
        "`warnings @Polliog 2`",
    warns_of: (user) => {
        return `Warnings of ${user.username}#${user.discriminator}`
    },
    //reportchannel
    reportchannel_use: "reportchannel [#Channel/ID]",
    reportchannel_description: "Set a channel for user reports",
    reportchannel_small_desc: "Set a channel for user reports",
    reportchannel_examples: "`reportchannel ID`\n" +
        "`reportchannel #Channel`",
    reportchannel_saved: (channel) => {
        return `Reportchannel set, **New channel**:${channel}`
    },
    //prefix
    my_prefix: (prefix) => {
        return `My prefix on this server is \`${prefix}\``
    },
    prefix_use: "prefix [Prefix]",
    prefix_description: "Set a custom prefix to the server, the BOT will respond to the new prefix and prefix `nisd`. \n" +
        "**You will still be able to tag the bot to see the prefix on this server**",
    prefix_small_desc: "Change the bot's prefix",
    prefix_examples: "`prefix ?`\n" +
        "`prefix n!!`",
    prefix_changed: (prefix) => {
        return `Bot prefix changed, **New prefix**: \`${prefix}\``
    },
    //mod
    mod_logs: "Moderation Logs",
    mod_deleteAfter: "Delete Command",
    mod_dmUser: "Message User",
    mod_use: "mod logs | dms | delete {#Channel/ID/none} {True/False}",
    mod_description: "**Change settings regarding moderation**\n" +
        ":small_blue_diamond: `mod logs [#Channel/ID/none]`\n" +
        "Set a channel to show the actions taken by the staff\n" +
        ":small_blue_diamond: `mod dms [True/False]`\n" +
        "Set whether or not to send a private message to the user when an action is taken" +
        ":small_blue_diamond: `mod delete [True/False]`\n" +
        "Set whether to automatically delete the command on action taken",
    mod_small_desc: "Open moderation settings, use `mod` for info",
    mod_examples: "`mod dms true` \n" +
        "`mod logs none` \n" +
        "`mod logs #Channel` \n" +
        "`mod delete true`",
    //modlogs
    mod_logs_use: "mod logs [#Channel/ID/none]",
    mod_logs_description: "Set a channel to show the actions taken by the staff\n" +
        "Use `none` instead of channel to disable logs",
    mod_logs_small_desc: "Set a channel to show actions taken by staff",
    mod_logs_examples: "mod logs ID" + "mod logs none" +
        "`mod logs none`\n" +
        "`mod logs #Channel`",
    mod_logs_channel_saved: (channel) => {
        return `Channel for moderation logs updated, **New channel**: ${channel}`
    },
    mod_logs_disabled: "Moderation logs disabled",
    //mod dms
    mod_dms_use: "mod dms [True/False]",
    mod_dms_description: "Set whether or not to send a private message to the user when the action is taken",
    mod_dms_small_desc: "Set whether or not to send a private message to the user when an action is taken",
    mod_dms_examples: "`mod dms true`" +
        "`mod dms false`",
    mod_dms_true: "Users will now be notified in the DMS",
    mod_dms_false: "Users will now no longer receive alerts in DMS",
    //mod delete
    mod_delete_use: "mod delete [True/False]",
    mod_delete_description: "Set whether to automatically delete the command when the action is executed",
    mod_delete_small_desc: "Set whether to automatically delete the command when the action is executed",
    mod_delete_examples: "`mod delete true`\n" +
        "`mod delete false`",
    mod_delete_true: "Now the commands will be deleted when the action is finished",
    mod_delete_false: "Commands will now not be deleted when the action is finished",
    //report
    report_use: 'report [Message]',
    report_description: "Report something to the server staff (minimum 10 characters)",
    report_small_desc: "Report something to the server staff",
    report_examples: "`report Polliog offended my person :(`",
    report_min_chars: "The message must be at least 10 characters long",
    report_not_configured: "No valid reporting channel is configured on the server.",
    report_sent: "Report sent!",
    //poll
    poll_use: "poll \"[Title]\" \"[Option1]\" \"[Option2]\" \"(Options)\"",
    poll_description: "Create a poll with multiple options, maximum 9 options",
    poll_small_desc: "Create a poll with multiple options",
    poll_examples: '`poll "Better sushi or pizza?" "pizza bruh" "sushi"`',
    poll_max_options: "You can use maximum 9 options",
    //info
    info_bot: "Information about the bot",
    info_use: "info",
    info_cmd_description: "Show information about the bot",
    started: "Start",
    version: "Version",
    //anti-flood
    antiflood_use: "antiflood [enable/disable | limit | action | time] {Number} {Action}",
    antiflood_description: "The AntiFlood allows you to protect the server against people who write a lot of messages repeatedly\n" +
        ":small_blue_diamond: `antiflood [enable/disable]`\n" +
        "Enable or disable AntiFlood\n" +
        ":small_blue_diamond: `antiflood limit [Limit]`\n" +
        "Set the maximum number of messages that can be sent in the given time\n" +
        ":small_blue_diamond: `antiflood action [Ban | Kick | Warn | Mute | none]`\n" +
        "Set the action the bot takes when it detects flood\n" +
        ":small_blue_diamond: `antiflood time [Time]`\n" +
        "Sets the time **in seconds**, in which the flood is to be determined",
    antiflood_small_desc: "Open AntiFlood settings",
    antiflood_examples: "`antiflood enable`\n" +
        "`antiflood limit 4`\n" +
        "`antiflood action ban`\n" +
        "`antiflood time 5`",
    //antiflood enable/disable
    antiflood_mode_use: "antiflood [Enable | Disable]",
    antiflood_mode_description: 'Enable or disable AntiFlood',
    antiflood_mode_small_desc: 'Enable or disable AntiFlood',
    antiflood_mode_examples: "`antiflood enable`\n" +
        "`antiflood disable`",
    antiflood_enabled: "`antiflood enable!`",
    antiflood_disabled: "AntiFlood disabled!",
    //antiflood limit
    antiflood_limit_use: "antiflood limit [Limit]",
    antiflood_limit_description: "Set the maximum number of messages that can be sent in the given time\n" +
        "**The more you increase the limit, the more messages you have to send to make it activate**",
    antiflood_limit_small_desc: "Set the maximum number of messages that can be sent in the given time",
    antiflood_limit_examples: "`antiflood limit 5`",
    antiflood_limit_min: "The minimum limit for AntiFlood is 3 messages",
    antiflood_limit_updated: (limit) => {
        return `Antiflood limit amended, **New limit**: \`${limit}\``
    },
    //anti-flood action
    antiflood_action_use: "antiflood action [Ban | Kick | Warn | Mute | none]",
    antiflood_action_description: "Set the action the bot takes when it detects flooding, use \`none\` to take no action (other than delete messages)",
    antiflood_action_small_desc: "Set the action the bot takes when it detects flooding",
    antiflood_action_examples: "\`antiflood action ban\`\n" +
        "\`antiflood action none\`",
    antiflood_action_updated: (action) => {
        return `antiflood action updated, **Action**: \`${action}\``
    },
    //antiflood time
    antiflood_time_use: "antiflood time [Seconds]",
    antiflood_time_description: 'Set the time **in seconds**, in which the flood is to be determined',
    antiflood_time_small_desc: "Sets the time at which flooding is to be determined",
    antiflood_time_examples: "`antiflood time 4`",
    antiflood_time_min: "The minimum time limit for AntiFlood is 3 seconds",
    antiflood_time_updated: (time) => {
        return `Updated AntiFlood time, **New time**: \`${time} Seconds`
    },
    antiflood_in_action: (member) => {
        return `${member}**, You're sending too many messages fast!**`
    },
    antiflood_acted: "[NISD AutoMod] The user sent too many messages too fast!",
    //antispam
    antispam_use: "antispam [enable/disable | action] {Action}",
    antispam_description: "AntiSpam is a function that automatically deletes all spam messages (server invites) in the server" +
        ":small_blue_diamond: `antispam [enable/disable]`\n" +
        "Enable or disable AntiSpam\n" +
        ":small_blue_diamond: `antispam action [Ban | Kick | Warn | Mute | none]`\n" +
        "Sets the action the bot takes when it detects a spam link",
    antispam_small_desc: "Open AntiSpam settings",
    antispam_examples: "`antispam enable`\n" +
        "`antispam action warn`",
    antispam_in_action: (member) => {
        return `${member}**, Invitation link detected!**`
    },
    antispam_acted: "[NISD AutoMod] Invitation link detected!",
    //antispam action
    antispam_action_use: "antispam action [Ban | Kick | Warn | Mute | none]",
    antispam_action_description: "Set the action the bot takes when it detects a spam message, " +
        "use `none` to take no action (other than deleting the message)",
    antispam_action_small_desc: "Set the action the bot takes if it detects spam",
    antispam_action_examples: "`antispam action ban`\n" +
        "`antispam action none`",
    antispam_action_updated: (action) => {
        return `AntiSpam action updated **Action**: \`${action}\``
    },
    //antispam enable/disable
    antispam_enabled: "AntiSpam enabled!",
    antispam_disabled: "AntiSpam disabled!",
    //antinuke
    antinuke_use: "antinuke [Category] [limit | action | enable/disable] {Options}",
    antinuke_description: "To view the current settings use \`antinuke info\`\n\n" +
        "Edit AntiNuke settings, to change a specific setting use `antinuke [category]`\n" +
        "If a user reaches the \"limit\" of an action, the bot punishes him, each action has its own punishment\n" +
        "You can set a global limit through `antinuke global [number]`\n\n" +
        ":small_blue_diamond: \`antinuke ban [limit | action | enable/disable] {Options}\`\n" +
        "Change the number of bans before triggering the bot's AntiNuke\n" +
        ":small_blue_diamond: \`antinuke kick [limit | action | enable/disable] {Options}\`\n" +
        "Change the number of kicks before triggering the bot's AntiNuke\n" +
        ":small_blue_diamond: \`antinuke rolecreate [limit | action | enable/disable] {Options}\`\n" +
        "Change the number of roles created before triggering the bot\'s AntiNuke\n" +
        ":small_blue_diamond: \`antinuke roledel [limit | action | enable/disable] {Options}\`\n" +
        "Change the number of roles deleted before triggering the bot\'s AntiNuke\n" +
        ":small_blue_diamond: \`antinuke channelcreate [limit | action | enable/disable] {Options}\`\n" +
        "Modify the number of channels created before triggering the AntiNuke of the bot\n" +
        ":small_blue_diamond: \`antinuke channeldel [limit | action | enable/disable] {Options}\`\n" +
        "Modify the number of channels deleted before triggering the AntiNuke of the bot\n" +
        ":small_blue_diamond: \`global [number]\`antinuke\n" +
        "Set a new global limit\n" +
        ":small_blue_diamond: \`antinuke info\`\n" +
        "Check the current AntiNuke settings",
    antinuke_small_desc: "View all AntiNuke settings",
    antinuke_examples: "`antinuke info`\n" +
        "`antinuke global 5`\n" +
        "`antinuke ban enable`\n" +
        "`antinuke kick action ban\n`" +
        "`antinuke rolecreate limit 4\n`" +
        "`antinuke rolecreate limit 4`",
    antinuke_warnings: "[ANTINUKE] Warning you are exceeding an AntiNuke limit",
    //antiban
    antiban_use: "antiban [limit | action | enable/disable] {Options}",
    antiban_description: "AntiBan is a function of AntiNuke that acts on users banning many members repeatedly\n" +
        ":small_blue_diamond: \`enable/disable anti-ban\`\n" +
        "Enable/Disable AntiBan\n" +
        ":small_blue_diamond: \`AntiBan limit [Number]\`\n" +
        "Change the number of bans needed to activate AntiBan\n" +
        ":small_blue_diamond: \`Antiban action [Sanction]\`\n" +
        "Modify the AntiBan sanction",
    antiban_small_desc: "Modify the AntiBan settings of the AntiNuke",
    antiban_examples: "`antiban enable`\n" +
        "`antiban disable`\n" +
        "`antiban limit 5`\n" +
        "`antiban action ban`",
    antiban_enabled: "AntiBan enabled!",
    antiban_disabled: "AntiBan disabled!",
    antiban_acted: "[ANTIBAN] Large number of bans executed by the user detected",
    //antiban action
    antiban_action_use: "antiban action [Ban | Kick | Warn | Mute]",
    antiban_action_description: "Sets the action to be performed by the BOT if a user exceeds the set limit",
    antiban_action_examples: "`antiban action ban`",
    antiban_action_updated: (action) => {
        return `AntiBan action updated, **Action**: \`${action}`
    },
    //antiban limit
    antiban_limit_use: "antiban limit [Number]",
    antiban_limit_description: "Sets the limit for AntiNuke's AntiBan",
    antiban_limit_examples: "`antiban limit 3`",
    antiban_limit_updated: (limit) => {
        return `AntiBan limit changed, **New limit**: \`${limit}\``
    },
    //antikick
    antikick_use: "antikick [limit | action | enable/disable] {Options}",
    antikick_description: "AntiKick is a function of AntiNuke that acts on users that expel many members repeatedly\n" +
        ":small_blue_diamond: \`antikick enable/disable\`\n" +
        "Enable/Disable Anti-Kick\n" +
        ":small_blue_diamond: \`antikick limit [Number]\`\n" +
        "Change the number of kicks needed to activate AntiKick\n" +
        ":small_blue_diamond: \`antikick action [Sanction]\`\n" +
        "Modify the AntiKick sanction",
    antikick_small_desc: "Modifies the AntiKick settings of the AntiNuke",
    antikick_examples: "`antikick enable`\n" +
        "`antikick disable`\n" +
        "`antikick limit 5`\n" +
        "`antikick action ban`",
    antikick_enabled: "Antikick enabled!",
    antikick_disabled: "AntiKick disabled!",
    antikick_acted: "[ANTIKICK] Large number of kicks executed by the user detected",
    //antikick action
    antikick_action_use: "antikick action [Ban | Kick | Warn | Mute]",
    antikick_action_description: "Sets the action to be performed by the BOT if a user exceeds the set limit",
    antikick_action_examples: "`antikick action ban`",
    antikick_action_updated: (action) => {
        return `antikick action updated, **Action**: \`${action}\``
    },
    //antikick limit
    antikick_limit_use: "antikick limit [Number]",
    antikick_limit_description: "Sets the limit for the AntiKick of the AntiNuke",
    antikick_limit_examples: "`antikick limit 3`",
    antikick_limit_updated: (limit) => {
        return `AntiKick limit changed, **New Limit**: \`${limit}\``
    },
    //antirolecreate
    antirolecreate_use: "antirolecreate [limit | action | enable/disable] {Options}",
    antirolecreate_description: "AntiRoleCreate is a function of AntiNuke that acts on users who create many roles in a short time\n" +
        ":small_blue_diamond: \`antirolecreate enable/disable\`\n" +
        "Enable/Disable AntiRoleCreate\n" +
        ":small_blue_diamond: \`AntiRoleCreate limit [Number]\`\n" +
        "Change the number of created roles needed to enable the AntiRoleCreate\n" +
        ":small_blue_diamond: \`antirolecreate action [Sanction]\`\n" +
        "Modify the AntiRoleCreate sanction",
    antirolecreate_small_desc: "Modifies the AntiRoleCreate settings of the AntiNuke",
    antirolecreate_examples: "`antirolecreate enable`\n" +
        "`antirolecreate disable`\n" +
        "`antirolecreate limit 5`\n" +
        "`antirolecreate action ban`\n",
    antirolecreate_enabled: "AntiRoleCreate enabled!",
    antirolecreate_disabled: "AntiRoleCreate disabled!",
    antirolecreate_acted: "[ANTIROLECREATE] Large number of user-created roles detected",
    //anti-rolecreate action
    antirolecreate_action_use: "antirolecreate action [Ban | Kick | Warn | Mute]",
    antirolecreate_action_description: "Sets the action to be performed by the BOT if a user exceeds the set limit",
    antirolecreate_action_examples: "`antirolecreate action ban`",
    antirolecreate_action_updated: (action) => {
        return `AntiRoleCreate action updated, **Action**: \`${action}`
    },
    //antirolecreate limit
    antirolecreate_limit_use: "antirolecreate limit [Number]",
    antirolecreate_limit_description: "Sets the limit for the AntiRoleCreate of the AntiNuke",
    antirolecreate_limit_examples: "`antirolecreate limit 3`",
    antirolecreate_limit_updated: (limit) => {
        return `Modified AntiRoleCreate Limit, **New Limit**: \`${limit}\``
    },
    //antiroledelete
    antiroledelete_use: "antiroledelete [limit | action | enable/disable] {Options}",
    antiroledelete_description: "AntiRoleDelete is a function of AntiNuke that acts on users who delete a lot of roles in a short time\n" +
        ":small_blue_diamond: \`antiroledelete enable/disable\`\n" +
        "Enable/Disable AntiRoleDelete\n" +
        ":small_blue_diamond: \`AntiRoleDelete limit [Number]\`\n" +
        "Change the number of deleted roles needed to activate the AntiRoleDelete\n" +
        ":small_blue_diamond: \`AntiRoleDelete action [Sanction]\`\n" +
        "Modify the AntiRoleDelete sanction",
    antiroledelete_small_desc: "Modify AntiRoleDelete settings of the AntiNuke",
    antiroledelete_examples: "`antiroledelete enable`\n" +
        "`antiroledelete disable`\n" +
        "`antiroledelete limit 5`\n" +
        "`antiroledelete action ban`",
    antiroledelete_enabled: "AntiRoleDelete enabled!",
    antiroledelete_disabled: "AntiRoleDelete disabled!",
    antiroledelete_acted: "[ANTIROLEDELETE] Large number of user-deleted roles detected",
    //antiroledelete action
    antiroledelete_action_use: "antiroledelete action [Ban | Kick | Warn | Mute]",
    antiroledelete_action_description: "Sets the action to be performed by the BOT if a user exceeds the set limit",
    antiroledelete_action_examples: "`antiroledelete action ban`",
    antiroledelete_action_updated: (action) => {
        return `AntiRoleDelete action updated, **Action**: \`${action}\``
    },
    //antiroledelete limit
    antiroledelete_limit_use: "antiroledelete limit [Number]",
    antiroledelete_limit_description: "Sets the limit for the AntiRoleDelete of the AntiNuke",
    antiroledelete_limit_examples: "`antiroledelete limit 3`",
    antiroledelete_limit_updated: (limit) => {
        return `Modified AntiRoleDelete Limit, **New Limit**: \`${limit}\``
    },
    //antichannelcreate
    antichannelcreate_use: "antichannelcreate [limit | action | enable/disable] {Options}",
    antichannelcreate_description: "AntiChannelCreate is a function of AntiNuke that acts on users who create many channels in a short time\n" +
        ":small_blue_diamond: \`antichannelcreate enable/disable\`\n" +
        "Enable/Disable AntiChannelCreate\n" +
        ":small_blue_diamond: \`antichannelcreate limit [Number]\`\n" +
        "Change the number of channels created necessary to activate the AntiChannelCreate\n" +
        ":small_blue_diamond: \`antichannelcreate action [Sanction]\`\n" +
        "Modify the AntiChannelCreate sanction",
    antichannelcreate_small_desc: "Modify AntiChannelCreate settings of the AntiNuke",
    antichannelcreate_examples: "`antichannelcreate enable`\n" +
        "`antichannelcreate disable`\n" +
        "`antichannelcreate limit 5`\n" +
        "`antichannelcreate action ban`",
    antichannelcreate_enabled: "AntiChannelCreate enabled!",
    antichannelcreate_disabled: "AntiChannelCreate disabled!",
    antichannelcreate_acted: "[ANTICHANNELCREATE] Large number of user-created channels detected",
    //antichannelcreate action
    antichannelcreate_action_use: "antichannelcreate action [Ban | Kick | Warn | Mute]",
    antichannelcreate_action_description: "Sets the action that the BOT should perform if a user exceeds the set limit",
    antichannelcreate_action_examples: "`antichannelcreate action ban`",
    antichannelcreate_action_updated: (action) => {
        return `AntiChannelCreate action updated, **Action**: \`${action}\``
    },
    //antichannelcreate limit
    antichannelcreate_limit_use: "antichannelcreate limit [Number]",
    antichannelcreate_limit_description: "Set limit for AntiChannelCreate of AntiNuke",
    antichannelcreate_limit_examples: "`antichannelcreate limit 3`",
    antichannelcreate_limit_updated: (limit) => {
        return `AntiChannelCreate limit changed, **New Limit**: \`${limit}\``
    },
    //antichanneldelete
    antichanneldelete_use: "antichanneldelete [limit | action | enable/disable] {Options}",
    antichanneldelete_description: "AntiChannelDelete is a function of AntiNuke that acts on users who delete a lot of channels in a short time\n" +
        ":small_blue_diamond: \`antichanneldelete enable/disable\`\n" +
        "Enable/Disable AntiChannelDelete\n" +
        ":small_blue_diamond: \`antichanneldelete limit [Number]\`\n" +
        "Change the number of deleted channels needed to activate AntiChannelDelete\n" +
        ":small_blue_diamond: \`antichanneldelete action [Sanzione]\`\n" +
        "Modify the AntiChannelDelete sanction",
    antichanneldelete_small_desc: "Modify the AntiChannelDelete settings of the AntiNuke",
    antichanneldelete_examples: "`antichanneldelete enable`\n" +
        "`antichanneldelete disable`\n" +
        "`antichanneldelete limit 5`\n" +
        "`antichanneldelete action ban`",
    antichanneldelete_enabled: "AntiChannelDelete enabled!",
    antichanneldelete_disabled: "AntiChannelDelete disabled!",
    antichanneldelete_acted: "[ANTICHANNELDELETE] Large number of user-deleted channels detected",
    //antichanneldelete action
    antichanneldelete_action_use: "antichanneldelete action [Ban | Kick | Warn | Mute]",
    antichanneldelete_action_description: "Sets the action to be performed by the BOT if a user exceeds the set limit",
    antichanneldelete_action_examples: "`antichanneldelete action ban`",
    antichanneldelete_action_updated: (action) => {
        return `AntiChannelDelete action updated, **Action**: \`${action}\``
    },
    //antichanneldelete limit
    antichanneldelete_limit_use: "antichanneldelete limit [Number]",
    antichanneldelete_limit_description: "Set the limit for AntiChannelDelete of the AntiNuke",
    antichanneldelete_limit_examples: "`antichanneldelete limit 3`",
    antichanneldelete_limit_updated: (limit) => {
        return `AntiChannelDelete limit changed, **New Limit**: \`${limit}\``
    },
    //antinuke global
    antinukeglobal_use: "antinuke global [Number]",
    antinukeglobal_description: "**Set the global limit of the AntiNuke**\n" +
        "The global limit is the sum of all actions committed by the user and recorded by the AntiNuke of the BOT in the last ±30 seconds.\n" +
        "**The BOT will only take into account actions of activated functions, to see which AntiNuke functions are activated use `antinuke info`**",
    antinukeglobal_small_desc: "Sets the global limit of the AntiNuke",
    antinukeglobal_examples: "`antinuke global 10`",
    antinukeglobal_updated: (limit) => {
        return `AntiNuke global limit amended, **New Limit**: \`${limit}\``
    },
    antinukeglobal_warnings: "[ANTINUKE] Warning you are exceeding the AntiNuke global limit",
    //antinuke info
    antinuke_info_title: "AntiNuke Settings",
    antinuke_info_description: "This panel shows all current AntiNuke settings, " +
        "you can change the various settings using `antinuke [Section]` or via individual commands `antiban {...}`",
    antinuke_info_global_title: "Global Limit",
    //antiraid
    antiraid_use: "antiraid [limit | action | enable/disable | time] {Options}",
    antiraid_description: "AntiRaid allows you to protect your server from many users entering in a short time" +
        ":small_blue_diamond: \`antiraid enable/disable\`\n" +
        "Enable/Disable AntiRaid\n" +
        ":small_blue_diamond: `limit [Number]`\n" +
        "Modify the number of users who entered within a certain time limit to enable AntiRaid\n" +
        ":small_blue_diamond: `antiraid time [Time]`\n" +
        "Set the time **in seconds**, in which the raid is determined\n" +
        ":small_blue_diamond: \`antiraid action [Sanction]\`\n" +
        "Modifies the AntiRaid sanction",
    antiraid_small_desc: "Modify AntiRaid settings",
    antiraid_examples: "`antiraid enable`\n" +
        "`antiraid disable`\n" +
        "`antiraid time 6`\n" +
        "`antiraid limit 5`\n" +
        "`antiraid action ban`",
    antiraid_enabled: "AntiRaid enabled!",
    antiraid_disabled: "AntiRaid disabled!",
    antiraid_acted: "[ANTIRAID] Large number of concurrent users detected",
    //antiraid limit
    antiraid_limit_use: "antiraid limit [Limit]",
    antiraid_limit_description: "Set the maximum number of users who entered at the determined time" +
        "**The more you increase the limit, the more users will enter to make it active**",
    antiraid_limit_small_desc: "Set the maximum number of users entered in the given time",
    antiraid_limit_examples: "`antiraid limit 5`",
    antiraid_limit_min: "The minimum limit for AntiRaid is 3 users",
    antiraid_limit_updated: (limit) => {
        return `Modified AntiRaid Limit, **New Limit**: \`${limit}\``
    },
    //antiraid action
    antiraid_action_use: "antiraid action [Ban | Kick | Warn | Mute]",
    antiraid_action_description: "Sets the action the bot takes when it detects a raid",
    antiraid_action_small_desc: "Sets the action the bot performs when it detects a raid",
    antiraid_action_examples: "`antiraid action ban`\n" +
        "`antiraid action none`",
    antiraid_action_updated: (action) => {
        return `antiraid action updated, **Action**: \`${action}\``
    },
    //antiraid time
    antiraid_time_use: "antiraid time [Seconds]",
    antiraid_time_description: "Sets the time **in seconds**, in which the raid is to be determined",
    antiraid_time_small_desc: "Sets the time at which raid is to be determined",
    antiraid_time_examples: "`antiraid time 4`",
    antiraid_time_min: "The minimum time limit for AntiRaid is 3 seconds",
    antiraid_time_updated: (time) => {
        return `Updated AntiRaid time, **New time**: \`${time} Seconds\``
    },
    //autoaction
    autoaction_use: "autoaction [add | remove | list] {Options}",
    autoaction_description: "Set an action to be performed when a user reaches a certain number of warns\n" +
        ":small_blue_diamond: `autoaction add [number] [ban | kick | mute] {time}`\n" +
        "Add an action that will execute the bot at the set number of warns\n" +
        ":small_blue_diamond: `autoaction remove [number]`\n" +
        "Remove an action of the autoAction\n" +
        ":small_blue_diamond: `autoaction list`\n" +
        "Show the actions that the bot will perform at certain numbers of warns",
    autoaction_small_desc: "Modify the bot's automatic actions at certain warns",
    autoaction_examples: "`autoaction list`\n" +
        "`autoaction remove 2`\n" +
        "`autoaction add 3 kick`\n" +
        "`autoaction add 5 ban 2d`",
    //autoaction add
    autoaction_add_use: "autoaction add [number] [ban | kick | mute] {time}",
    autoaction_add_description: "**Actions Available**:\n" +
        "`ban (Time)` = Ban the user from the server, time optional\n" +
        "kick = Ejects the user from the server\n" +
        "`mute (Time)` = Mute the user, time optional\n" +
        "**Note**: A role must be selected for mute via `setmuterole [Role]`",
    autoaction_add_examples: "`autoaction add 5 mute 12h`",
    autoaction_already_exists: (number) => {
        return `Another action already exists and is set for \`${number}\` warns. Check the other measures with the command \`autoaction list\`.`
    },
    autoaction_added: (number, action, time) => {
        let real_action


        switch (action) {
            case 'ban':
                real_action = 'banned'
                break
            case 'kick':
                real_action = 'expelled'
                break
            case 'mute':
                real_action = 'mutated'
                break
            default:
                real_action = "?"
                break
        }

        let send = `updated settings, as of now reached ${number} warns, the user will be ${real_action}`

        if (time !== null) {
            send = send + 'temporarily'
        }

        return send
    },
    //autoaction remove
    autoaction_remove_use: "autoaction remove [Number]",
    autoaction_remove_description: "Remove an autoaction",
    autoaction_remove_examples: "`autoaction remove 3`",
    autoaction_dont_exists: (number) => {
        return `There is no action set for \`${number}\` warns. Check for measures with the command \`autoaction list\``
    },
    autoaction_removed: "Measure removed",
    //autoaction list
    autoaction_list_description: "**Set Measures**:",
    autoaction_list_null: "No action set :(",
    //autoaction reasons
    autoaction_reason: '[AUTOACTION] Set warns reached',
    //autodelwarn
    autodelwarn_use: "autodelwarn [enable/disable | Set] {Time}",
    autodelwarn_description: "This function allows warns to be removed after a specified time\n" +
        ":small_blue_diamond: `autodelwarn enable/disable`\n" +
        "Enable/Disable the automatic deletion of warnings\n" +
        ":small_blue_diamond: `autodelwarn set [Time]\n`" +
        "Sets the time after which warnings will be automatically deleted",
    autodelwarn_small_desc: "Sets the automatic deletion of warns",
    autodelwarn_examples: "`autodelwarn enable`\n" +
        "`autodelwarn set 1M`",
    autodelwarn_enabled: "`AutoDelWarn enabled!",
    autodelwarn_disabled: "AutoDelWarn disabled!",
    //autodelwarn set
    autodelwarn_set_use: "autodelwarn set [Time]",
    autodelwarn_set_description: "Set the time after which warnings will be automatically deleted",
    autodelwarn_set_examples: "`autodelwarn set 1m`",
    autodelwarn_set_updated: (time) => {
        return `Autodelwarn time updated, **New time**: \`${time}\``
    },
    //blacklist
    blacklist_use: 'blacklist [enable/disable | add/remove | action | list] {Options}',
    blacklist_description: "The blacklist is a list of banned words that will be automatically deleted, even if they are included in the sentences, **The bot will also try to detect similar sentences/words (with special or little different characters)**\n\n" +
        ":small_blue_diamond: `blacklist enable/disable`\n" +
        "Enable/disable the blacklist on the server\n" +
        ":small_blue_diamond: `blacklist add/remove [Word/Phrase]`\n" +
        "Add/Remove a word or phrase from the BlackList\n" +
        ":small_blue_diamond: `blacklist action [Action]`\n" +
        "Modify the action taken by the bot when it detects a banned word/phrase, use **none** as the action to not perform an action against the user (other than deleting the message)\n" +
        ":small_blue_diamond: `blacklist list`\n" +
        "Displays the current list of banned words and phrases",
    blacklist_small_desc: "Open blacklist settings",
    blacklist_examples: "\`blacklist enable\`\n" +
        "\`blacklist add \"word\"\`\n" +
        "\`blacklist add \"one sentence\"\`\n" +
        "\`blacklist remove \"word\"\`\n" +
        "\`blacklist action ban\`\n" +
        "\`blacklist list\`",
    blacklist_enabled: "Blacklist enabled!",
    blacklist_disabled: "BlackList disabled!",
    blacklist_add_remove_use: "blacklist add/remove [Word/Phrase]",
    blacklist_add_remove_description: "Add/remove a word or phrase from the BlackList, use `blacklist list` to display banned words/phrases",
    blacklist_add_remove_examples: "\`blacklist add \"word\"\`\n" +
        "\`blacklist add \"one sentence\"\`\n" +
        "\`blacklist remove \"word\"\`\n",
    blacklist_word_already_added: "The inserted word/phrase is already in the blacklist",
    blacklist_word_not: "The entered word/phrase is not on the blacklist",
    blacklisted_word_added: (word) => {
        return `Blacklist updated, **added**: ${word}`
    },
    blacklisted_word_removed: (word) => {
        return `BlackList updated, **removed**: \`${word}\``
    },
    blacklisted_words: "Forbidden words",
    blacklist_clear: "No banned words :(",
    blacklist_list_clear: "No words denied :(",
    blacklist_acted: "[NISD AUTOMOD] Forbidden Word Detected!",
    blacklist_in_action: (member) => {
        return `${member}**, Prohibited word detected!**`
    },
    blacklist_action_use: "blacklist action [Ban | Kick | Warn | Mute | None]",
    blacklist_action_description: "Sets the action to be performed by the BOT if a user sends a message containing" +
        " an impermissible word, use **none** to perform no action (other than delete the message)",
    blacklist_action_examples: "`blacklist action ban`",
    blacklist_action_updated: (action) => {
        return `blacklist action updated, **Action**: \`${action}\``
    },
    blacklist_action_removed: `BlackList action removed`,
    //bypassrole
    bypassrole_use: "bypassrole [add / remove | list] {@Rule/ID}",
    bypassrole_description: "Create an \"ignored\" list of roles from the AutoMod\n\n" +
        ":small_blue_diamond: \`bypassrole add/remove [@Role/ID]\`\n" +
        "Add/Remove a role to be \"ignored\N by the AutoMod\n" +
        ":small_blue_diamond: \`bypassrole list\`\n" +
        "Show the list of all roles \"ignored\" by the AutoMod",
    bypassrole_small_desc: "Set roles to be ignored by the AutoMod",
    bypassrole_examples: "\`bypassrole add @role\`\n" +
        "\`bypassrole remove id\`\n" +
        "\`bypassrole list\`",
    //bypassrole add/remove
    bypassrole_add_remove_use: "bypassrole add/remove [@Rule/ID]",
    bypassrole_add_remove_description: "Add/Remove a role to be ignored by the AutoMod",
    bypassrole_add_remove_examples: "add @ruolo\`bypassrole" +
        "\`bypassrole remove id\`n",
    bypassrole_role_already: "The selected role is already ignored",
    bypassrole_role_not: "The selected role is not in the list of ignored roles",
    bypassrole_role_added: (role) => {
        return `Role added, **Role**: ${role}`
    },
    bypassrole_role_removed: (role) => {
        return `Role removed, **Role**: ${role}`
    },
    bypassrole_ignored_roles: "ignored roles",
    bypassrole_clear: "No role ignored",
    //bypasschannel
    bypasschannel_use: "bypasschannel [add/remove | list] {#Channel/ID}",
    bypasschannel_description: "Creates a list of channels ignored by the bot's AutoMod\n" +
        ":small_blue_diamond: \`Bypasschannel add/remove [#Channel/ID]\`\n" +
        "Add/Remove a channel from the list of ignored channels\n" +
        ":small_blue_diamond:\`bypasschannel list\`\n" +
        "Show ignored channel list",
    bypasschannel_small_desc: "Set channels to be ignored by the AutoMod",
    bypasschannel_examples: "`bypasschannel add #channel`\n" +
        "`bypasschannel remove id`\n" +
        "`bypasschannel list`",
    //bypasschannel add/remove
    bypasschannel_add_remove_use: "bypasschannel add/remove [@Rule/ID]",
    bypasschannel_add_remove_description: "Add/remove a channel to be ignored by the AutoMod",
    bypasschannel_add_remove_examples: "bypasschannel add #channel" +
        "\`bypasschannel remove id\`n",
    bypasschannel_channel_already: "The selected channel is already ignored",
    bypasschannel_channel_not: "The selected channel is not in the list of ignored channels",
    bypasschannel_channel_added: (channel) => {
        return `Channel added, **Channel**: ${channel}`
    },
    bypasschannel_channel_removed: (channel) => {
        return `Channel removed, **Channel**: ${channel}`
    },
    bypasschannel_ignored_channels: "Channels ignored",
    bypasschannel_clear: "No channel ignored",
    //Captcha
    captcha_use: "captcha [Category] {Options}",
    captcha_description: "Captcha verification allows a code to be sent privately to the user, who must retype it to be verified.\n" +
        "Each of the commands below contains a separate help page where you can find more information\n" +
        "**In order to work, verification needs a role to be assigned and it is recommended to set a channel for logs**\n\n" +
        ":small_blue_diamond: `captcha enable/disable`\n" +
        "Enable/Disable Captcha Verification\n" +
        ":small_blue_diamond: `captcha mode [fake | new | all]`\n" +
        "Set which users to run captcha\n" +
        ":small_blue_diamond: `captcha role [@Role/ID]`\n" +
        "Select a role to add to the fully-verified user\n" +
        ":small_blue_diamond: `captcha action [ban | kick | mute | none]`\n" +
        "Select an action to have the bot take against a user who fails verification\n" +
        ":small_blue_diamond: `captcha time [minutes]`\n" +
        "Set how many minutes a user has to enter the code\n" +
        ":small_blue_diamond: `captcha bypass [@Member/ID]`\n" +
        "Make a user skip verification\n" +
        ":small_blue_diamond: `captcha resend [@Member/ID]`\n" +
        "Re-verify a user \n" +
        ":small_blue_diamond: `captcha log-channel [#Channel/ID | None]`\n" +
        "Select a channel to receive all verification information\n" +
        ":small_blue_diamond: `captcha toggle-role [@Role/ID | None]`\n" +
        "Select a role to remove once the user verifies themselves",
    captcha_examples: "Due to the large number of commands, all examples are present in the various categories^^",
    captcha_small_desc: "Configure verification by captcha",
    //captcha
    captcha_enabled: "Captcha verification enabled",
    captcha_disabled: "Captcha verification disabled",
    //captcha mode
    captcha_mode_use: "captcha mode [fake | new | all]",
    captcha_mode_description: "Set which users to run the pre-created mode verification listed:\n" +
        "`fake` = Run verification on users with an account age less than \`2-3 hours\`\n" +
        "`new` = Check users who have recently registered to Discord \`~15 days\`\n" +
        "`all` = Check users with an account aged less than \`2-3 hours\`\n" +
        "**Of course, if users are not in the mode time frame they will be automatically verified**",
    captcha_mode_examples: "\`captcha mode all\`",
    captcha_mode_updated: (mode) => {
        return `Captcha mode changed, **Mode**: \`${mode}\``
    },
    //captcha role
    captcha_role_use: "captcha role [@Role/ID]",
    captcha_role_description: "Add the role to be added to the user at full verification",
    captcha_role_examples: "\`captcha role 123456789\`\n" +
        "\`captcha role @role\`",
    captcha_role_updated: (role) => {
        return `Captcha role updated, **Role**: ${role}`
    },
    //captcha action
    captcha_action_use: "captcha action [Ban | Kick | Warn | Mute | None]",
    captcha_action_description: "Sets the action to be performed by the BOT if the verification fails",
    captcha_action_examples: "`captcha action ban`",
    captcha_action_updated: (action) => {
        return `Captcha verification action updated, **Action**: \`${action}\``
    },
    captcha_action_removed: `Captcha verification action removed`,
    //captcha time
    captcha_time_use: "captcha time [minutes]",
    captcha_time_description: "Set in how many minutes the user must perform the verification **PER TENTATIVE**, **max 60 minutes**",
    captcha_time_examples: "`captcha time 15`",
    captcha_time_updated: (time) => {
        return `Updated captcha time, **Time**: \`${time}\` minutes`
    },
    captcha_time_invalid_time: "The number to be entered must be between 1 and 60",
    //captcha log-channel
    captcha_logchannel_use: "captcha log-channel [#Channel/ID | None]",
    captcha_logchannel_description: "Set a channel to send all captcha verification logs to, use **none** to remove the channel",
    captcha_logchannel_examples: "`captcha log-channel #channel`\n`captcha log-channel 1332435324`\n`captcha log-channel none`",
    captcha_logchannel_updated: (channel) => {
        if (channel == null) {
            return "Logs channel disabled"
        } else {
            return `Captcha logs channel set, **Channel**: ${channel}`
        }
    },
    //captcha toggle-role
    captcha_togglerole_use: "captcha toggle-role [@Rule/ID | None]",
    captcha_togglerole_description: "Select a role to remove once the user occurs, use **none** to disable this feature",
    captcha_togglerole_examples: "`captcha toggle-role @role`\n`captcha toggle-role none`\n`captcha toggle-role 12321432432545`",
    captcha_togglerole_updated(role) {
        if (role == null) {
            return "Role to remove disabled"
        } else {
            return `Role to be removed after verification set, **Role**: ${role}`
        }
    },
    //CAPTCHA EMBEDS
    captcha_embed_title: "Verification Required",
    captcha_embed_retry_title: "Verification failed, please try again",
    captcha_embed_failed_title: "Verification Failed",
    captcha_embed_impossible_title: "Verification Impossible",
    captcha_embed_stopped_title: "Verification Cancelled",
    captcha_embed_auto_title: "Automatic Verification",
    captcha_embed_auto_started_title: "Automatic Verification Started",
    captcha_embed_started_title: "Verification Initiated",
    captcha_embed_completed_title: "Verification Completed",
    captcha_embed_error_title: "Error during verification",
    captcha_acted: "Captcha verification failed",
    captcha_embed_bypass_title: "Verification Bypassed",
    autocaptcha_embed_impossible_title: "Automatic verification, impossible",
    captcha_embed_description: (minutes, tries) => {
        return `**To access the server you must send the code below in this chat**\n` +
            `**Time to send the code**: \`${minutes} Minutes\`\n` +
            `**Remaining attempts**: \`${tries}\`\n\n` +
            `**Code to send**:`
    },
    captcha_embed_retry_description: (mode) => {
        if (mode === "time") {
            return "Time expired"
        } else if (mode === "fail") {
            return "Wrong code"
        } else if (mode === "tries") {
            return "Attempts terminated"
        }
    },
    captcha_embed_stopped_description: (member) => {
        return `The user ${member.user.username}#${member.user.discriminator} || \`${member.user.id}\` has left the server, so its verification has been aborted`
    },
    captcha_embed_started_description: (member) => {
        return `The user ${member.user.username}#${member.user.discriminator} || \`${member.user.id}\` has started the verification`
    },
    captcha_embed_auto_description_user: "It was detected that you already have the role on the server, so you were automatically verified",
    captcha_embed_auto_description: (member) => {
        return `The user ${member.user.username}#${member.user.discriminator} || \`${member.user.id}\` was automatically verified as having the role to be added`
    },
    captcha_embed_completed_description_user: "Verification successful, you will receive the role shortly",
    captcha_embed_completed_description: (member) => {
        return `The user ${member.user.username}#${member.user.discriminator} || \`${member.user.id}\` has been successfully verified`
    },
    captcha_embed_failed_description: (member) => {
        return `The user ${member.user.username}#${member.user.discriminator} || \`${member.user.id}\` has failed verification`
    },
    captcha_embed_auto_started_description: (member) => {
        return `The user ${member.user.username}#${member.user.discriminator} || \`${member.user.id}\` is not in the verification range, verification bypassed`
    },
    captcha_embed_bypass_description: (user, bypassMember) => {
        return `The user ${user.username}#${user.discriminator} || \`${user.id}\` has bypassed the verification of The user ${bypassMember.user.username}#${bypassMember.user.discriminator} || \`${bypassMember.user.id}\``
    },
    //CAPTCHA ERRORS
    captcha_owner_error: (member, error) => {
        return `There appears to have been an error while verifying the user \`${member.user.username}#${member.user.discriminator} || ${member.user.id}\`\n\n` +
            `**Error**: \`${error}\`\n\n` +
            `*It is advisable to set a channel for captcha logs if you do not want to receive these messages anymore*`
    },
    captcha_error_invalid_role: "The role to be assigned to full verification is missing/invalid",
    captcha_error_invalid_togglerole: "The role to be removed at full verification is missing/invalid",
    captcha_error_invalid_permissions: "The bot cannot perform the verification because it does not have the necessary permissions",
    captcha_error_dm_blocked: (member) => {
        return `The user \`${member.user.username}#${member.user.discriminator} || ${member.user.id}\` has DMs blocked, so I can't verify it`
    },
    captcha_error_user: "Can't verify due to a configuration issue",
    //CAPTCHA BYPASS
    captcha_bypass_use: "captcha bypass [@User/ID]",
    captcha_bypass_description: "bypass verification for a user",
    captcha_bypass_examples: "\`captcha bypass @User\`\n" +
        "\`captcha bypass ID\`",
    captcha_bypassed_cmd: "The user has been successfully verified",
    //CAPTCHA RESEND
    captcha_resend_use: "captcha resend [@User/ID]",
    captcha_resend_description: "Resend verification to a user",
    captcha_resend_examples: "\`captcha resend @Polliog\`n" +
        "\`captcha resend 173569203977060353\`",
    captcha_resend_cmd: "Verification started successfully",
    //TICKETS INTERNAL
    ticketsInt_opened: `Ticket Opened`,
    ticketsInt_openedInChannel: (channel) => `Ticket opened in channel ${channel}`,
    ticketsInt_openedby: (member) => `Ticket opened by ${member}`,
    ticketsInt_reopenedby: (member) => `Ticket reopened by ${member}`,
    ticketsInt_reopened: "Ticket Reopened",
    ticketsInt_panel: "Panel",
    ticketsInt_ticket: "Ticket",
    ticketsInt_close: "Close",
    ticketsInt_closed: "Closed",
    ticketsInt_closedPhrase: "Ticket Closed",
    ticketsInt_closedby: (member) => `Ticket closed by ${member}`,
    ticketsInt_closedOptions: "📝 : Transcript the ticket\n\n🗑️ : Delete the ticket\n\n🔁 : Reopen the ticket",
    ticketsInt_transcriptSavedTitle: "Transcript Saved",
    ticketsInt_transcriptSavedDescriptionChannel: (channel) => `Transcript sent to channel ${channel}`,
    ticketsInt_transcriptSavedDescriptionUser: (user) => `Transcription saved by ${user}`,
    ticketsInt_transcriptSavedInfos: "To view the transcription download the file attached above",
    ticketsInt_delete_ask: "Do you really want to delete this ticket?",
    ticketsInt_deleted_logs: "Ticket Deleted",
    //TICKETS COMMANDS
    tickets_use: "tickets [Category] {Options}",
    tickets_description: "Tickets allow for a more orderly handling of user requests by creating a ticket using the ticket command" +
        "you will create a `panel` (message with a button underneath) from which you interact to create a private ticket.\n" +
        "**Tickets take permissions from the category in which they are created**\n\n" +
        ":small_blue_diamond: `ticket create`\n" +
        "Start the creation of the panel from which to create the tickets\n" +
        ":small_blue_diamond: `ticket panel [panelID]`\n" +
        "Recreate a previously created panel\n" +
        ":small_blue_diamond: `ticket edit [panelID]`\n" +
        "Edit the settings of a panel\n" +
        ":small_blue_diamond: `ticket delete [panelID]`\n" +
        "Permanently delete a panel\n" +
        ":small_blue_diamond: `ticket logs [#Channel/ID | None]`\n" +
        "Set a channel for ticket logs, enter `none` to deactivate the logs\n" +
        ":small_blue_diamond: `ticket transcript-logs [#Channel/ID | None]`\n" +
        "Set a channel to send transcripts in a channel other than the logs channel, enter \`none\` to disable the logs\n" +
        ":small_blue_diamond: `ticket info (panelID)`\n" +
        "Displays information about a panel, if no panel is entered all panels will be displayed\n" +
        ":small_blue_diamond: `ticket [Open/Close/Transcript]`\n" +
        "Open/Close/Transcript the ticket where the command has been executed",
    tickets_examples: "Due to the large number of commands, all examples are present in the various categories^^",
    tickets_small_desc: "Configure verification via captcha",
    //tickets create
    tickets_creation_sys: "Tickets creation system",
    tickets_create_message: "Would you like to start the creation of a new panel? The panel will be created in this channel**",
    ticket_create_exited: "Panel creation cancelled.",
    tickets_create_insert: "The panel will be created in this channel**",
    tickets_create_insert_title: "Type a title for the ticket",
    tickets_create_insert_message: "Type a message to be sent to the bot when a new ticket is created",
    tickets_create_insert_category: "Type the ID or the name of the category to create tickets for.\n\n" +
        "**Note**: Tickets (channels) will take permissions from this category",
    tickets_create_invalid_category: "Invalid category, please try again",
    tickets_create_insert_upmessage: "Type the message outside the embed, useful to pin support roles",
    tickets_create_insert_role: "Type the ID or tag the role that will take care of the tickets.\n\n" +
        "**Note**: This role will be forcibly given permissions to write to the ticket (channel) *if needed*",
    tickets_create_invalid_role: "Invalid role, please try again",
    tickets_create_confirm_message: "Do you confirm the creation of a new panel with the following settings?",
    tickets_create_confirm_message_how: "Type in \`y\` to confirm or \`n\` to cancel",
    //tickets general
    tickets_panel: 'To create a ticket click the :tickets: button below',
    tickets_panel_footer: 'Tickets by NISD',
    create_ticket: 'Create Ticket',
    //ticket panel
    invalid_ticket_panel: 'Panel not found, use \`tickets info\` to see the IDs of existing panels',
    tickets_panel_use: 'ticket panel [panelID]',
    tickets_panel_description: 'Recreates a previously created panel',
    tickets_panel_examples: 'ticket panel ID',
    //tickets edit
    tickets_edit_title: "What do you want to edit?",
    tickets_edit_sys: "Ticket editing system",
    tickets_edit_use: "ticket edit [panelID]",
    tickets_edit_description: "Edit the settings of a panel",
    tickets_edit_exited: "Edit cancelled",
    tickets_edit_examples: "ticket edit ID",
    tickets_edited: "Saved panel settings",
    tickets_edited_title: "Saved panel settings, use the command \`ticket panel [panelID]\` to make them effective",
    //ticket delete
    tickets_delete_use: "ticket delete [panelID]",
    tickets_delete_description: "Permanently delete a panel",
    tickets_delete_examples: "ticket delete ID",
    tickets_delete_title: (panelID) => {
        return `Delete ticket panel \`${panelID}\``
    },
    tickets_delete_confirmed: ':accepted_gif: Deleted ticket panel',
    tickets_delete_exited: ":denied_gif: Operation cancelled",
    tickets_delete_sys: "Ticket Deletion System",
    //tickets info
    tickets_info_title: "NISD Tickets Info",
    tickets_info_description: (logs, tlogs) => {
        return `**Logs**: ${logs}\n**Transcript Logs**: ${tlogs}\n`
    },
    //ticket logs
    tickets_logs_use: "ticket logs [#Channel/ID | None]",
    tickets_logs_description: "Set a channel for ticket logs, enter \`none\` to deactivate the logs",
    tickets_logs_examples: "\`ticket logs ID\`\n\`ticket logs none\`",
    tickets_logs_success: (none, channel) => {
        return none ? "As of now, no more ticket logs will be sent" : `Ticket logs channel updated, new channel: ${channel}`
    },
    //ticket transcript-logs
    tickets_transcriptlogs_use: "ticket transcript-logs [#Channel/ID | None]",
    tickets_transcriptlogs_description: "Set a channel to send transcripts in a channel other than the logs channel, enter \`none\` to disable the logs",
    tickets_transcriptlogs_examples: "ticket transcript-logs ID\nticket transcript-logs none",
    tickets_transcriptlogs_success: (none, channel) => {
        return none ? "From now on transcripts will be sent back to the logs channel (if set) or to the ticket (if not)" : `Transcripts channel updated, new channel: ${channel}`
    },
    //language
    lang_use: "lang [language]",
    lang_description: "Choose the language for the bot on this server",
    lang_examples: "`lang it`\n`lang en`",
    //autoroles
    autoroles_use: "autoroles [user/bot | list] {role}",
    autoroles_description: "Set roles for users / bots to add as soon as they enter the server, redoing the command with the same role will remove it from the list\n\n" +
        ":small_blue_diamond: `autoroles user/bot [@Role/ID]`\n" +
        "Add/Remove a role from the list\n" +
        ":small_blue_diamond: `autoroles list`\n" +
        "Check your current autoroles",
    autoroles_examples: "`autoroles user @Role`\n" +
        "`autoroles bot id`\n" +
        "`autoroles list`",
    autoroles_small_desc: "Automatically add roles to new users/bots",
    autoroles_add: (role) => { return `Added ${role} to autoroles` },
    autoroles_remove: (role) => { return `Removed ${role} from autoroles` },
    //autoroles list
    autoroles_list: "AutoRoles List",
    //logs
    logs_use: "logs",
    logs_description: "The logs allow you to keep track of all the actions performed on the server\n\n" +
        "**This function is configurable only via [[Dashboard]](https://nisdbot.xyz/)**",
    logs_small_description: "The logs allow you to keep track of all the actions performed on the server",
    //logs events
    logs_channelCreate_description: (channel) => {
        switch (channel.type) {
            case "GUILD_TEXT":
                return `New text channel created (${channel})`
            case "GUILD_VOICE":
            case "GUILD_STAGE_VOICE":
                return `New voice channel created (${channel})`
            case "GUILD_CATEGORY":
                return `New category created (${channel})`
            default:
                return `New channel created (${channel})`

        }
    },
    logs_channelDelete_description: (channel) => {
        switch (channel.type) {
            case "GUILD_TEXT":
                return `Text channel deleted (${channel.name})`
            case "GUILD_VOICE":
            case "GUILD_STAGE_VOICE":
                return `Voice channel deleted (${channel.name})`
            case "GUILD_CATEGORY":
                return `Category deleted (${channel.name})`
            default:
                return `Channel deleted (${channel.name})`
        }
    },
    logs_channelUpdate_description: (channel) => {
        switch (channel.type) {
            case "GUILD_TEXT":
                return `Textual channel updated (${channel})`
            case "GUILD_VOICE":
            case "GUILD_STAGE_VOICE":
                return `Voice channel updated (${channel})`
            case "GUILD_CATEGORY":
                return `Category updated (${channel.name})`
            default:
                return `Channel updated (${channel.name})`
        }
    },
    overwrites_removed_for: "Permissions removed for",
    added_overwrites_for: "Permissions added for",
    logs_roleCreate_description: (role) => {
        return `New role created (${role})`
    },
    logs_roleDelete_description: (role) => {
        return `Role deleted (${role.name})`
    },
    logs_roleUpdate_description: (role) => {
        return `Role updated (${role})`
    },
    logs_messageDelete_description: (channel) => {
        return `Deleted message in ${channel} (${channel.name})`
    },
    logs_message_sent_above: "Message sent after embed due to length...",
    logs_message_bulk_description: (count) => {
        return `**${count}** messages have been deleted and saved`
    },
    logs_message_update_description: (message) => {
        return `**${message.author.username}#${message.author.discriminator}** changed their message in ${message.channel}`
    },
    logs_member_remove_description: (member) => {
        return `**${member.user.username}#${member.user.discriminator}** left the server`
    },
    logs_member_update_description: (member, author) => {
        return `L'utente **${member.user.username}#${member.user.discriminator}** updated by ${author}`
    },
    logs_member_join_description: (member) => {
        return `**${member}** joined the server`
    },
    logs_invite_used: (invite, user) => {

        if (!user) {
            user = "Uknown"
        } else {
            user = `${user.username}#${user.discriminator}`
        }

        return `Used invite ${invite} created by ${user}`
    },
    logs_invite_impossibile() {
        return "Unable to find the invitation, a vanity url was probably used"
    },
    logs_member_kicked(member, author) {
        return `**${member.user.username}#${member.user.discriminator}** has been kicked by ${author}`
    },
    logs_member_banned(user, author) {
        return `**${user.username}#${user.discriminator}** has been banned by ${author}`
    },
    logs_member_unbanned(user, author) {
        return `**${user.username}#${user.discriminator}** has been unbanned by ${author}`
    },
    logs_guild_updated(author) {
        return `**${author.user.username}#${author.user.discriminator}** updated the server`
    },
    logs_emoji_create(emoji, author) {
        return `**${author.user.username}#${author.user.discriminator}** created the emoji **${emoji.name}**`
    },
    logs_emoji_delete(emoji, author) {
        return `**${author.user.username}#${author.user.discriminator}** deleted the emoji **${emoji.name}**`
    },
    logs_emoji_update(emoji, author) {
        return `**${author.user.username}#${author.user.discriminator}** updated the emoji **${emoji.name}**`
    },
    logs_voice_update(member, author) {
        return `**${member.user.username}#${member.user.discriminator}** had their voice state updated by **${author.user.username}#${author.user.discriminator}**`
    },
    logs_voice_join(member, channel) {
        return `**${member.user.username}#${member.user.discriminator}** joined voice channel **${channel.name}**`
    },
    logs_voice_leave(member, channel) {
        return `**${member.user.username}#${member.user.discriminator}** left voice channel **${channel.name}**`
    },
    logs_voice_switch(member, oldChannel, newChannel) {
        return `**${member.user.username}#${member.user.discriminator}** switched from voice channel **${oldChannel.name}** to voice channel **${newChannel.name}**`
    },
    //antiscam
    antiscam_use: "antiscam [enable/disable | action] {Action}",
    antiscam_description: "Automatically delete and take action when sending malicious links\n" +
        ":small_blue_diamond: `antiscam enable/disable`\n" +
        "Enable / Disable AntiScam\n" +
        ":small_blue_diamond: `antiscam action [Ban | Kick | Warn | Mute | none]`\n" +
        "Select the action taken by the bot when detected a malicious link",
    antiscam_small_desc: "Automatically delete and take action when sending malicious links",
    antiscam_examples: "`antiscam enable`\n`antiscam ban`",
    //antiscam enable
    antiscam_enabled: "AntiScam enabled",
    antiscam_disabled: "AntiScam disabled",
    //antiscam action
    antiscam_action_updated: (action) => {
        return `AntiScam action updated, **Action**: \`${action}\``
    },
    antiscam_acted: "[NISD AutoMod] Malicious link detected!",
}
