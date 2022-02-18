/*
    
    @Authors: @Polliog#7772 | 𝓝𝓪𝓴𝓪𝓶𝓸𝓽𝓸 𝓢𝓱𝓲𝓰𝓮𝓽𝓸𝓴𝓲#0016
    @Translated by: @TeknoSenpai#0957 (https://github.com/TeknoSenpai/)
*/

const lang = {
    lang: "jp", //ファイルの言語
    //ボットの一般的な単語
    maintenance: "メインテナンス中",
    message: "メッセージ",
    messages: "メッセージス",
    examples: "例",
    site: "ウェブサイト",
    support_discord: "サッポートサーバー",
    aliases: "エイリアス",
    changes_saved: '設定が正常に更新されました',
    cmd_done: "コマンド完了",
    author: "著者",
    reason: "理由",
    reason_not_provided: "動機が提供されていません",
    user: "ユーザー",
    users: "ユーザーズ",
    page: "ページ",
    moderation: "モデレーション",
    settings: "設定",
    utility: "効用",
    active: "アックチブ",
    not_active: "非活性",
    report: "報告",
    nothing: "なし",
    action: "アックション",
    limit: "リミット",
    time: "時間",
    changes: "Changes",
    actions: "アックション",
    measure: "測定",
    actual_mode: "現在のモード",
    mode: "モード",
    role: "ロールー",
    title: "タイトル",
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
    embed_message: "エンベッドメッセージ",
    external_message: "外部メッセージ",
    category: "カテゴリー",
    support_role: "サポートのロールー",
    joined_at: "Joined at",
    created_at: "Created at",
    server_deaf: "Deaf",
    server_mute: "Mute",
    //ボットの便利なアクション
    to_add: "追加される",
    to_remove: "削除する",
    // Interaction Replies
    interaction_success: "Action completed",
    //ボットエラー、適切と思われるように翻訳
    bot_error: "内部エラーが発生しました。エラーは自動的に開発者に送信されます",
    error: "エラー",
    insufficient_permissions: "不十分な権限",
    invalid_user: "無効なユーザー!",
    invalid_member: "メンバーが無効です!",
    invalid_role: "無効な役割!",
    invalid_channel: "効なチャンネル!",
    invalid_permission: "ボットには許可がありません:",
    no_basic_permissions: "ボットには、埋め込みリンクの送信やメッセージの送信などの基本的な権限がありません",
    no_user_permission: "コマンドを使用するには、次の権限が必要です:",
    owner_restriction: "サーバー所有者のみがこのコマンドを実行できます",
    owner_restriction_plus: "このコマンドを実行できるのは、サーバーの所有者または`manager`の役割を持つ人だけです。",
    command_not_found: "コマンドが見つかりません",
    user_not_found: "User not found",
    /*
        time_left: ウニックスタイムスタンプ
        cmd: コマンド
     */
    cmd_cooldown: (time_left, cmd) => {
        return `\`${cmd}\` <t:${time_left}:R> でコマンドを使用できるようになります` //時間には<t:>を使用します（ディスコードタイムスタンプ）
    },
    already_banned: "ユーザーはすでに禁止されています",
    actual_channel: "現在のチャネル",
    not_banned: "ユーザーは禁止されていません",
    cant_ban: "このユーザーを禁止することはできません",
    cant_kick: "このユーザーを禁止することはできません",
    user_rank_equal: "選択したユーザーの学位はあなたの学位以上です",
    invalid_mute_role: "選択した `mute`ロールが無効であるか、存在しません。`setmuterole[@ロール/ID]`を使用してリセットしてください",
    member_not_manageable: "ボットはこのユーザーに対してアクションを実行できません",
    warn_not_exists: "存在しないことを警告する",
    no_warns: "ユーザーには警告がありません",
    bad_syntax: "コマンドの構成が正しくない、引用符が正しく使用されていることなどを確認してください。",
    message_too_long: "内容が256文字を超えています",
    maximum_ticket_panels_reached: "利用可能なパネルの制限に達しました",
    tickets_channel_error_user: "現在、チケットを作成できません",
    tickets_channel_error_logs: "権限が不十分なため、チケットを開くことができませんでした",
    tickets_channel_closed_logs: "チケットのクローズ中にエラーが発生しました",
    /*
        time: ウニックスタイムスタンプ
     */
    ticketsInt_rateLimit: (time) => `このアクションをやり直すことができます： \<t:${time}:R\>`,
    ticketsInt_alreadyClosed: "チケットはすでにクローズされています。",
    ticketsInt_transcriptAlreadySent: "チケットのトランスクリプトはすでにリクエストされています。",
    //HELP (コマンド)
    not_in_dm: "DMでは使用できません",
    i_cant_write_you: "DMにあなたを書き込んだり、開いたり、コマンドの最後に `-h`を追加したりすることはできません。",
    help_sent: "DMでリストを送信しました",
    help_title: "NISDコマンド",
    help_description: "特定のセクションまたはコマンドを確認するには、 `help [セクション/コマンド]`を使用します。\n" +
        "このコマンドをDMではなくチャットで表示する場合は、コマンドの最後に「-h」を追加します。したがって、 `help-h`または` help moderation -h`",
    arguments_legend: "**パラメータの凡例**:\n" +
        "`[]` - これは、パラメーターが必須であることを意味します。\n" +
        "`()` - これは、パラメーターがオプションであることを意味します。\n" +
        "`{}` - 条件付き引数。場合によってのみ必要です。\n" +
        "`1 | 2 | 3` - これらのオプションから選択してください。\n" +
        "`[@ユーザー/ID]` パラメータは、ユーザーのタグとユーザーIDの両方にすることができます\n" +
        "**コマンドに記号「{}、[]、（）」絵文字も追加しないでください**",
    cmd_utilize: "コマンドの使用",
    not_configured: "`構成されていません`",
    actual_role: "現在の役割",
    time_format: "時間の書式設定",
    moderation_description: "*サーバーを安全に保ち、何が起こるかを確認します*",
    automoderation_description: "*サーバーを自動的に安全に保つ*",
    automation_description: "*ボットの機能を自動化する*",
    settings_description: "*コマンドを使用してNISDを構成する*",
    utility_description: "*便利なコマンド*",
    info_description: "*ボット、ユーザー、サーバーなどに関する情報を取得します*",
    //時間
    year: "年",
    years: "年",
    month: "月",
    months: "月",
    day: "日",
    days: "日",
    hour: "時間",
    hours: "時間",
    minute: "分",
    minutes: "分",
    second: "秒",
    seconds: "秒",
    duration: "間隔",
    //AVATAR
    avatar_use: "アバター (@ユーザー/ID)",
    avatar_description: "選択したユーザーまたはボットのアバターを表示します",
    avatar_small_desc: "選択したユーザーまたはボットのアバターを表示します",
    avatar_examples: "`avatar @Polliog`\n `avatar ID`",
    required_by: (user) => {
        return `${user.username}#${user.discriminator}に要求された `
    },
    avatar_of: (user) => {
        return `${user.username}#${user.discriminator}のアバター`
    },
    //USERINFO
    userinfo_use: "user (@ユーザー/ID)",
    userinfo_description: "ユーザーの情報を表示する",
    userinfo_small_desc: "ユーザーの情報を表示する",
    userinfo_examples: "`user ID`\n`user @Polliog`",
    info_of: (member) => {
        return `情報:　${member.user.username} | ${member.user.id}`
    },
    name: "ネーム",
    mention: "アット",
    status: "状況",
    created: "アカウントが作成されました",
    entered: "サーバーに入った",
    yes: "はい",
    no: "いや",
    roles: "ロール",
    no_role: "ロールなし",
    //SERVERINFO
    icon: "アイコン",
    region: "領域",
    categories: "カテゴリ",
    text_channels: "テキストチャネル",
    voice_channels: "音声チャネル",
    members: "メンバース",
    channels: "チャンネル",
    server_use: "サーバー",
    server_description: "サーバー情報を表示する",
    server_small_desc: "サーバー情報を表示する",
    //SAY
    say_use: "say [メッセージ]",
    say_description: "ボットにメッセージを繰り返させます",
    say_examples: "`say hello world`",
    //BUG
    bug_sent: "バグレポートを送信しました！",
    bug_use: "bug [メッセージ]]",
    bug_description: "サポートチームにエラーを報告してください（最低50文字）\n" +
        "レポートにはできるだけ多くの詳細を含めてください。\n\n" +
        ":warning: **警告**コマンドの乱用は結果をもたらします！",
    bug_small_desc: 'エラーをサポートチームに報告してください',
    bug_examples: "`bug warnコマンドでこのエラーが発生します...`",
    bug_min_chars: "メッセージの長さは50文字以上である必要があります。",
    //INVITE
    invite_content: "ボットに関心をお寄せいただきありがとうございます",
    invite_me: "インバイトーリンク",
    //MANAGER
    manager_use: "manager [@ロール/ID/None]",
    manager_description: "サーバー所有者専用の設定を変更できる役割を設定し、 `none`を使用して役割を削除します。\n" +
        "`manager`ロールもAntiNukeによって自動的にバイパスされます" +
        "\n\n :warning: **コマンドは注意して使用してください。BOTスタッフはサーバーへのいかなる損害についても責任を負いません**",
    manager_small_desc: "所有者専用の設定を変更できる役割を設定する",
    manager_examples: "`manager @⚡ | Amministratore `\n" +
        "`manager 589443292673081385`\n" +
        "`manager none`",
    manager_saved: (role) => {
        return `\manager\`ロールセット。 **新しい役割**: ${role}`
    },
    manager_removed: "\`manager\`役割が削除されました",
    //CLEAR
    clear_use: "clear [ナンバー]",
    clear_description: "チャネル内の多数のメッセージを削除します **[Max. 1000]**",
    clear_small_desc: "チャネル内の多数のメッセージを削除します",
    clear_examples: "`clear 1000`",
    max_messages: "一度に最大1000件のメッセージを削除できます",
    clear_done: (number) => {
        return `<a:accettato_gif:742023278071119913> 削除された\`${number} \`メッセージ\``
    },
    //BAN
    ban_use: "ban [@ユーザー/ID] (時間) (モチベーション) (-c)",
    ban_description: "サーバーからユーザーを恒久的にまたは特定の期間禁止し、コマンドに `-c`を追加して、ユーザーのメッセージも削除します" +
        "過去7日間に送信されました。ユーザーが一時的に時間を「3h 16m 8s」として3時間16分8秒でフォーマットすることを禁止したい場合" +
        "\nこのコマンドは、サーバーに存在しないユーザーに対しても機能します",
    ban_small_desc: "サーバーからのユーザーの禁止、オプションの時間",
    ban_examples: "`ban @ユーザー`\n" +
        "`ban ID フロッド -c`\n" +
        "`ban @ユーザー 1d 迷惑です`\n",
    user_banned: "ユーザーが禁止されました！",
    user_banned_dm: (guild) => {
        return `あなたは${guild.name}禁止されています `
    },
    ban_timeout: "禁止期限が切れました",
    ban_timeout_dm: (guild) => {
        return `あなたは${guild.name}の禁止期間が終了しました。これで、サーバーに再度参加できます`
    },
    //unban
    unban_use: "unban [@ユーザー/ID] (モチベーション)",
    unban_small_desc: "サーバーからのユーザーの禁止",
    unban_description: "サーバーからユーザーを禁止して、ユーザーが再度ログインできるようにします",
    unban_examples: "`unban @ユーザー`" +
        "\n`unban ID おっとー… 間違った人`",
    user_unbanned: "禁止されていないユーザー",
    user_unbanned_dm: (guild) => {
        return `あなたは${guild.name}禁止を解除されました`
    },
    //kick
    kick_use: "kick [@ユーザー/ID] (モチベーション) (-c)",
    kick_description: "サーバーからユーザーをキックし、 `-c`を追加して、過去7日間にユーザーから送信されたメッセージも削除します",
    kick_small_desc: "サーバーからユーザーを追い出します",
    kick_examples: "`kick ID`" +
        "\n`kick @ユーザー -c`" +
        "\n`kick @ユーザー 母音でイライラする`" +
        "\n`kick @ユーザー メインチャットのスパムマ -c`",
    user_kicked: "ユーザー追放",
    user_kicked_dm: (guild) => {
        return `あなたは${guild.name}から追放されました`
    },
    //mute
    mute_use: "mute [@ユーザー/ID] (時間) (モチベーション)",
    mute_description: "ユーザーをミュートして、ユーザーがもう話せないようにします。 " +
        "ユーザーフォーマットを一時的に変更したい場合は、時間を「3h 16m 8s」として3時間16分8秒にします。 " +
        "ユーザーがサーバーを終了して再入しても、ユーザーは変更されたままになります。\n" +
        "**カスタムのデフォルトの役割を持つサーバーでは、権限を上書きするためにコマンドが機能しない場合があることに注意してください**",
    mute_small_desc: "ユーザーをミュートする、オプションの時間",
    mute_examples: "`mute ID`\n" +
        "`mute @ユーザー`\n" +
        "`mute @ユーザー 15m スパムをやめる`\n" +
        "`mute @ユーザー 母音で絶えず悩まされる`",
    user_muted: "変更されたユーザー",
    user_muted_dm: (guild) => {
        return `${guild.name}に変更されました`
    },
    mute_timeout: "ミュートの有効期限が切れました",
    mute_timeout_dm: (guild) => {
        return `${guild.name}はもう変更していません。サーバーでの会話に戻ることができます、`
    },
    //unmute
    unmute_use: "unmute [@ユーザー/ID] (モチベーション)",
    unmute_description: "ユーザーがサーバーと再び会話できるように、ユーザーをミュートします",
    unmute_small_desc: "サーバー上のユーザーをスマットする",
    unmute_examples: "`unmute ID`\n" +
        "`unmute @ユーザー`\n" +
        "`unmute @ユーザー 間違った人、ごめんなさい<3`",
    user_unmuted: "つぶやいたユーザー",
    user_unmuted_dm: (guild) => {
        return `あなたは${guild.name}でスマットになっています`
    },
    //muterole
    muterole_use: "muterole [@ロール/ID] (-n)",
    muterole_description: "`mute`コマンドに使用する役割を設定します" +
        "\n\n **:warning: コマンドを使用して、ボットはサーバーに存在するすべてのチャネルで役割を設定しようとします。これを回避するには、コマンドに `-n`を追加します。**",
    muterole_small_desc: "`mute`コマンドに使用する役割を設定します",
    muterole_examples: "`muterole ID`\n" +
        "`muterole @ロール`\n" +
        "`muterole @ロール -n`",
    muterole_saved: (role) => {
        return `\`ミュート\`ロールセット。 **新しいロール**: ${role}`
    },
    //warn
    warn_use: "warn [@ユーザー/ID] (モチベーション)",
    warn_description: "ユーザーに通知する",
    warn_small_desc: "ユーザーに通知する",
    warn_examples: "`warn ID`\n" +
        "`warn @ユーザ スパムをやめる`",
    user_warned: "ユーザーに通知",
    user_warned_dm: (guild) => {
        return `${guild.name}について警告されました`
    },
    //unwarn
    unwarn_use: "unwarn [@ユーザー/ID] [ナンバー] (モチベーション)",
    unwarn_description: "ユーザーからの警告を削除し、警告番号を見つけるには `warnings [@ユーザ]`を使用します",
    unwarn_small_desc: "ユーザーからの警告を削除します",
    unwarn_examples: "`unwarn ID`\n" +
        "`unwarn @ユーザ`\n" +
        "`unwarn @ユーザ 仲間を許します`",
    user_unwarned: "警告を削除",
    user_unwarned_dm: (guild) => {
        return `${guild.name}で削除された警告`
    },
    //clearwarn
    clearwarns_use: "clearwarns [@ユーザ/ID] (モチベーション)",
    clearwarns_description: "ユーザーに与えられたすべてのアラートをクリアします",
    clearwarns_small_desc: "ユーザーに与えられたすべてのアラートをクリアします",
    clearwarns_examples: "`clearwarns ID`\n" +
        "`clearwarns @ユーザ`\n" +
        "`clearwarns @ユーザ モチベーション`",
    user_clearwarns: "警告は完全に排除されました",
    user_clearwarns_dm: (guild) => {
        return `${guild.name}で完全に削除された警告`
    },
    //warnings
    warnings_use: "warnings [@ユーザ/ID] (ページ)",
    warnings_description: "特定のユーザーからのアラートを表示する",
    warnings_small_desc: "特定のユーザーからのアラートを表示する",
    warnings_examples: "`warnings ID`\n" +
        "`warnings ID 2`\n" +
        "`warnings @Polliog`\n" +
        "`warnings @Polliog 2`",
    warns_of: (user) => {
        return `${user.username}＃${user.discriminator}の警告`
    },
    //reportchannel
    reportchannel_use: "reportchannel [#チャンネル/ID]",
    reportchannel_description: "ユーザーレポート用のチャネルを設定する",
    reportchannel_small_desc: "ユーザーレポート用のチャネルを設定する",
    reportchannel_examples: "`reportchannel ID`\n" +
        "`reportchannel #チャンネル`",
    reportchannel_saved: (channel) => {
        return `レポートチャネルセット、**新しいチャネル**：${channel}`
    },
    //prefix
    my_prefix: (prefix) => {
        return `このサーバーの私のプレフィックスは\` ${prefix} \`です`
    },
    prefix_use: "prefix [プレフィックス]",
    prefix_description: "サーバーにカスタムプレフィックスを設定します。ボットは新しいプレフィックスと `nisd`プレフィックスに応答します \n" +
        "**ボットにタグを付けて、このサーバーのプレフィックスを確認することもできます**",
    prefix_small_desc: "ボットプレフィックスを変更する",
    prefix_examples: "`prefix ?`\n" +
        "`prefix n!!`",
    prefix_changed: (prefix) => {
        return `ボットプレフィックスが変更されました、**新しいプレフィックス**：\`${prefix} \``
    },
    //mod
    mod_logs: "ログのモデレート",
    mod_deleteAfter: "コマンドの削除",
    mod_dmUser: "ユーザーメッセージ",
    mod_use: "mod logs | dms | delete {#チャンネル/ID/none} {True/False}",
    mod_description: "**モデレート設定を変更します**\n" +
        ":small_blue_diamond: `mod logs [＃チャンネル/ID/none]`\n" +
        "スタッフが行ったアクションを表示するチャネルを設定します\n" +
        ":small_blue_diamond: `mod dms [True/False]`\n" +
        "アクションが実行された後にユーザーにプライベートメッセージを送信するかどうかを設定します\n" +
        ":small_blue_diamond: `mod delete [True/False]`\n" +
        "アクションの実行後にコマンドを自動的に削除するかどうかを設定します",
    mod_small_desc: "モデレート設定を開き、情報に `mod`を使用します",
    mod_examples: "`mod dms true` \n" +
        "`mod logs none`\n" +
        "`mod logs #チャンネル`\n" +
        "`mod delete true`",
    //modlogs
    mod_logs_use: "mod logs [#チャンネル/ID/none]",
    mod_logs_description: "スタッフが行ったアクションを表示するチャネルを設定します\n" +
        "ログを無効にするには、チャネルの代わりに「none」を使用します",
    mod_logs_small_desc: "スタッフが行ったアクションを表示するチャネルを設定します",
    mod_logs_examples: "`mod logs ID`\n" +
        "`mod logs none`\n" +
        "`mod logs #チャンネル`",
    mod_logs_channel_saved: (channel) => {
        return ` 更新されたモデレーションログチャネル、**新しいチャネル**：${channel}`
    },
    mod_logs_disabled: "モデレートログが無効になっています！",
    //mod dms
    mod_dms_use: "mod dms [True/False]",
    mod_dms_description: "アクションが実行された後にユーザーにプライベートメッセージを送信するかどうかを設定します",
    mod_dms_small_desc: "アクションが実行された後にユーザーにプライベートメッセージを送信するかどうかを設定します",
    mod_dms_examples: "`mod dms true`\n" +
        "`mod dms false`",
    mod_dms_true: "ユーザーはDMで通知されます",
    mod_dms_false: "ユーザーはDMSでアラートを受信しなくなります",
    //mod delete
    mod_delete_use: "mod delete [True/False]",
    mod_delete_description: "アクションの実行後にコマンドを自動的に削除するかどうかを設定します",
    mod_delete_small_desc: "アクションの実行後にコマンドを自動的に削除するかどうかを設定します",
    mod_delete_examples: "`mod delete true`\n" +
        "`mod delete false`",
    mod_delete_true: "これで、アクションが終了するとコマンドが削除されます",
    mod_delete_false: "これで、アクションの終了時にコマンドが削除されなくなります",
    //report
    report_use: "report [メッセージ]",
    report_description: "サーバースタッフに何かを報告する（最低10文字）",
    report_small_desc: "サーバースタッフに何かを報告する",
    report_examples: "`Polliogが私の人を怒らせたと報告する:(`",
    report_min_chars: "メッセージの長さは10文字以上である必要があります。",
    report_not_configured: "サーバーに有効なシグナリングチャネルが設定されていません。",
    report_sent: "レポートを送信しました！",
    //poll
    poll_use: "poll \"[タイトル]\" \"[オプション1]\" \"[オプション2]\" \"(オプションス)\"",
    poll_description: "複数のオプション、最大9つのオプションを使用して調査を作成する",
    poll_small_desc: "複数のオプションを使用して調査を作成する",
    poll_examples: '`poll 「お寿司とピザのどちらがいい？」「ピザ」「寿司」`\n',
    poll_max_options: "最大9つのオプションを使用できます",
    //info
    info_bot: "ボットについて",
    info_use: "info",
    info_cmd_description: "BOTに関する情報を表示する",
    started: "始める",
    version: "バージョン",
    //antiflood
    antiflood_use: "antiflood [enable/disable | limit | action | time] {ナンバー} {アックション}",
    antiflood_description: "AntiFloodを使用すると、多くのメッセージを繰り返し入力するユーザーからサーバーを保護できます\n\n" +
        ":small_blue_diamond: `antiflood [enable/disable]`\n" +
        "AntiFloodを有効または無効にします　\n" +
        ":small_blue_diamond: `antiflood limit [リミット]`\n" +
        "指定された時間に送信できるメッセージの最大数を設定します\n" +
        ":small_blue_diamond: `antiflood action [Ban | Kick | Warn | Mute | none]`\n" +
        "ボットがフラッドを検出したときに実行するアクションを設定します\n" +
        ":small_blue_diamond: `antiflood time [時間]`\n" +
        "洪水が決定される時間を**秒単位で**設定します",
    antiflood_small_desc: "AntiFlood設定を開きます",
    antiflood_examples: "`antiflood enable`\n" +
        "`antiflood limit 4`\n" +
        "`antiflood action ban`\n" +
        "`antiflood time 5`",
    //antiflood enable/disable
    antiflood_mode_use: "antiflood [Enable | Disable]",
    antiflood_mode_description: "AntiFloodを有効または無効にします",
    antiflood_mode_small_desc: "AntiFloodを有効または無効にします",
    antiflood_mode_examples: "`antiflood enable`\n" +
        "`antiflood disable`",
    antiflood_enabled: "AntiFlood　オンライン!",
    antiflood_disabled: "AntFlood　オフライン!",
    //antiflood limit
    antiflood_limit_use: "antiflood limit [リミット]",
    antiflood_limit_description: "指定された時間に送信できるメッセージの最大数を設定します\n" +
        "**制限を増やすほど、制限を有効にするために送信する必要のあるメッセージが多くなります**",
    antiflood_limit_small_desc: "指定された時間に送信できるメッセージの最大数を設定します",
    antiflood_limit_examples: "`antiflood limit 5`",
    antiflood_limit_min: "AntiFloodの最小制限は3メッセージです",
    antiflood_limit_updated: (limit) => {
        return `AntiFlood制限が変更され、**新しい制限**：\`${limit} \``
    },
    //antiflood action
    antiflood_action_use: "antiflood action [Ban | Kick | Warn | Mute | none]",
    antiflood_action_description: "ボットがフラッドを検出したときに実行するアクションを設定し、 `none`を使用してアクションを実行しません（メッセージの削除以外）",
    antiflood_action_small_desc: "ボットがフラッドを検出したときに実行するアクションを設定します",
    antiflood_action_examples: "`antiflood action ban`\n" +
        "`antiflood action none`",
    antiflood_action_updated: (action) => {
        return `AntiFloodアクションが更新されました。**アクション**：\`${action} \``
    },
    //antiflood time
    antiflood_time_use: "antiflood time [Secondi]",
    antiflood_time_description: "洪水が決定される時間を**秒単位で**設定します",
    antiflood_time_small_desc: "洪水が決定される時間を設定します",
    antiflood_time_examples: "`antiflood time 4`",
    antiflood_time_min: "AntiFloodの最小制限時間は3秒です",
    antiflood_time_updated: (time) => {
        return `AntiFlood時刻が更新され、**新しい時刻**：\`${time}秒\``
    },
    antiflood_in_action: (member) => {
        return `${member}**, あなたはあまりにも多くの速さでテキストメッセージを送っています！**`
    },
    antiflood_acted: "[NISD AutoMod] ユーザーが送信したメッセージが多すぎます！",
    //antispam
    antispam_use: "antispam [enable/disable | action] {アックション}",
    antispam_description: "スパム対策は、サーバー内のすべてのスパムメッセージ（サーバー招待状）を自動的に削除する機能です\n" +
        ":small_blue_diamond: `antispam [enable/disable]`\n" +
        "スパム対策を有効または無効にする\n" +
        ":small_blue_diamond: `antispam action [Ban | Kick | Warn | Mute | none]`\n" +
        "ボットがスパムリンクを検出したときに実行するアクションを設定します",
    antispam_small_desc: "スパム対策設定を開きます",
    antispam_examples: "`antispam enable`\n" +
        "`antispam action warn`",
    antispam_in_action: (member) => {
        return `${member}**, 招待リンクが検出されました！**`
    },
    antispam_acted: "[NISD AutoMod] 招待リンクが検出されました！",
    //antispam action
    antispam_action_use: "antispam action [Ban | Kick | Warn | Mute | none]",
    antispam_action_description: "ボットがスパムメッセージを検出したときに実行するアクションを設定します, " +
        "`none`を使用して、アクションを実行しません（メッセージの削除以外）",
    antispam_action_small_desc: "ボットがスパムを検出した場合に実行するアクションを設定します",
    antispam_action_examples: "`antispam action ban`\n" +
        "`antispam action none`",
    antispam_action_updated: (action) => {
        return `AntiSpam action updated **Action**: \`${action}\``
    },
    //antispam enable/disable
    antispam_enabled: "スパム対策が有効になっています！",
    antispam_disabled: "スパム対策が無効になっています!",
    //antinuke
    antinuke_use: "antinuke [カテゴリー] [limit | action | enable/disable] {オプションス}",
    antinuke_description: "現在の設定を表示するには、\`antinuke info \`を使用します\n\n" +
        "AntiNukeの設定を変更します。特定の設定を変更するには、 `antinuke [カテゴリー]を使用します。`\n" +
        "ユーザーがボットが罰するアクションの「制限」に達した場合、各アクションには独自の罰があります\n" +
        "\`antinukeglobal [number]\`を使用して、「グローバル」制限を設定できます \n\n" +
        ":small_blue_diamond: \`antinuke ban [limit | action | enable/disable] {オプションス}\` \n" +
        "ボットのAntiNukeをトリガーする前に禁止番号を変更してください\n" +
        ":small_blue_diamond: \`antinuke kick [limit | action | enable/disable] {オプションス}\` \n" +
        "ボットのAntiNukeをトリガーする前にキックの数を変更します\n" +
        ":small_blue_diamond: \`antinuke rolecreate [limit | action | enable/disable] {オプションス}\` \n" +
        "ボットのAntiNukeをトリガーする前に作成されたロールの数を変更します\n" +
        ":small_blue_diamond: \`antinuke roledel [limit | action | enable/disable] {オプションス}\` \n" +
        "ボットのAntiNukeをトリガーする前に、削除されたロールの数を変更してください\n" +
        ":small_blue_diamond: \`antinuke channelcreate [limit | action | enable/disable] {オプションス}\`\n" +
        "ボットのAntiNukeをトリガーする前に作成されたチャネルの数を変更します\n" +
        ":small_blue_diamond: \`antinuke channeldel [limit | action | enable/disable] {オプションス}\`\n" +
        "ボットのAntiNukeをトリガーする前に削除されたチャネルの数を変更します\n" +
        ":small_blue_diamond: \`antinuke global [ナンバー]\`\n" +
        "新しいグローバル制限を設定する\n" +
        ":small_blue_diamond: \`antinuke info\`\n" +
        "現在のAntiNuke設定を確認してください",
    antinuke_small_desc: "すべてのAntiNuke設定を表示",
    antinuke_examples: "`antinuke info`\n" +
        "`antinuke global 5`\n" +
        "`antinuke ban enable`\n" +
        "`antinuke kick action ban`\n" +
        "`antinuke rolecreate limit 4`",
    antinuke_warnings: "[ANTINUKE] AntiNukeの制限を超えていることを警告します",
    //antiban
    antiban_use: "antiban [limit | action | enable/disable] {オプションス}",
    antiban_description: "AntiBanは、多くのメンバーを繰り返し禁止するユーザーに作用するAntiNukeの機能です\n\n" +
        ":small_blue_diamond: \`antiban enable/disable\`\n" +
        "AntiBanを有効/無効にする\n" +
        ":small_blue_diamond: \`antiban limit [ナンバー]\`\n" +
        "AntiBanをアクティブ化するために必要な禁止の数を変更します\n" +
        ":small_blue_diamond: \`antiban action [制裁]\`\n" +
        "AntiBan制裁を変更する",
    antiban_small_desc: "AntiNukeAntiBan設定を変更します",
    antiban_examples: "`antiban enable`\n" +
        "`antiban disable`\n" +
        "`antiban limit 5`\n" +
        "`antiban action ban`",
    antiban_enabled: "AntiBanが有効になりました！",
    antiban_disabled: "AntiBanが無効になっています！",
    antiban_acted: "[ANTIBAN]多数のユーザーによる禁止が検出されました",
    //antiban action
    antiban_action_use: "antiban action [Ban | Kick | Warn | Mute]",
    antiban_action_description: "ユーザーが設定された制限を超えた場合にボットが実行する必要のあるアクションを設定します",
    antiban_action_examples: "`antiban action ban`",
    antiban_action_updated: (action) => {
        return `AntiBanアクションが更新されました。**アクション**：\`${action} \``
    },
    //antiban limit
    antiban_limit_use: "antiban limit [ナンバー]",
    antiban_limit_description: "AntiNukeのAntiBanの制限を設定します",
    antiban_limit_examples: "`antiban limit 3`",
    antiban_limit_updated: (limit) => {
        return `AntiBanの制限が変更され、**新しい制限**：\`${limit} \``
    },
    //antikick
    antikick_use: "antikick [limit | action | enable/disable] {オプションス}",
    antikick_description: "AntiKickは、多くのメンバーを繰り返し禁止するユーザーに作用するAntiNukeの機能です\n\n" +
        ":small_blue_diamond: \`antikick enable/disable\`\n" +
        "AntiKickを有効/無効にする\n" +
        ":small_blue_diamond: \`antikick limit [ナンバー]\`\n" +
        "AntiKickをアクティブにするために必要なキックの数を変更します\n" +
        ":small_blue_diamond: \`antikick action [制裁]\`\n" +
        "AntiKick制裁を変更する",
    antikick_small_desc: "AntiNukeのAntiKick設定を変更します",
    antikick_examples: "`antikick enable`\n" +
        "`antikick disable`\n" +
        "`antikick limit 5`\n" +
        "`antikick action ban`",
    antikick_enabled: "AntiKickオンライン!",
    antikick_disabled: "AntiKickオンライン!",
    antikick_acted: "[ANTIKICK]ユーザーが実行した多数のキックを検出しました",
    //antikick action
    antikick_action_use: "antikick action [Ban | Kick | Warn | Mute]",
    antikick_action_description: "ユーザーが設定された制限を超えた場合にボットが実行する必要のあるアクションを設定します",
    antikick_action_examples: "`antikick action ban`",
    antikick_action_updated: (action) => {
        return `AntiKickアクションが更新されました。**アクション**：\`${action} \``
    },
    //antikick limit
    antikick_limit_use: "antikick limit [ナンバー]",
    antikick_limit_description: "AntiNukeのAntiKickの制限を設定します",
    antikick_limit_examples: "`antikick limit 3`",
    antikick_limit_updated: (limit) => {
        return `AntiKickの制限が変更されました。**新しい制限**：\`${limit} \``
    },
    //antirolecreate
    antirolecreate_use: "antirolecreate [limit | action | enable/disable] {オプションス}",
    antirolecreate_description: "AntiRoleCreateは、短時間で多くの役割を作成するユーザーに作用するAntiNukeの機能です\n\n" +
        ":small_blue_diamond: \`antirolecreate enable/disable\`\n" +
        "AntiRoleCreateを有効/無効にする\n" +
        ":small_blue_diamond: \`antirolecreate limit [ナンバー]\`\n" +
        "AntiRoleCreateをアクティブ化するために必要な作成されたロールの数を変更します\n" +
        ":small_blue_diamond: \`antirolecreate action [制裁]\`\n" +
        "AntiRoleCreate制裁を変更する",
    antirolecreate_small_desc: "AntiNukeのAntiRoleCreate設定を変更します",
    antirolecreate_examples: "`antirolecreate enable`\n" +
        "`antirolecreate disable`\n" +
        "`antirolecreate limit 5`\n" +
        "`antirolecreate action ban`",
    antirolecreate_enabled: "AntiRoleCreateが有効になりました！",
    antirolecreate_disabled: "AntiRoleCreateが無効になっています！",
    antirolecreate_acted: "[ANTIROLECREATE]多数のユーザー作成の役割が検出されました",
    //antirolecreate action
    antirolecreate_action_use: "antirolecreate action [Ban | Kick | Warn | Mute]",
    antirolecreate_action_description: "ユーザーが設定された制限を超えた場合にボットが実行する必要のあるアクションを設定します",
    antirolecreate_action_examples: "`antirolecreate action ban`",
    antirolecreate_action_updated: (action) => {
        return `更新されたAntiRoleCreateアクション、**アクション**：\`${action} \``
    },
    //antirolecreate limit
    antirolecreate_limit_use: "antirolecreate limit [ナンバー]",
    antirolecreate_limit_description: "AntiNukeのAntiRoleCreateの制限を設定します",
    antirolecreate_limit_examples: "`antirolecreate limit 3`",
    antirolecreate_limit_updated: (limit) => {
        return `AntiRoleCreateの制限を変更しました。**新しい制限**：\`${limit} \``
    },
    //antiroledelete
    antiroledelete_use: "antiroledelete [limit | action | enable/disable] {オプションス}",
    antiroledelete_description: "AntiRoleDeleteは、短時間で多くの役割を削除するユーザーに作用するAntiNukeの機能です。\n\n" +
        ":small_blue_diamond: \`antiroledelete enable/disable\`\n" +
        "AntiRoleDeleteを有効/無効にする\n" +
        ":small_blue_diamond: \`antiroledelete limit [ナンバー]\`\n" +
        "AntiRoleDeleteをアクティブ化するために必要な削除されたロールの数を変更します\n" +
        ":small_blue_diamond: \`antiroledelete action [制裁]\`\n" +
        "AntiRoleDelete制裁を変更する",
    antiroledelete_small_desc: "AntiNukeのAntiRoleDelete設定を変更します",
    antiroledelete_examples: "`antiroledelete enable`\n" +
        "`antiroledelete disable`\n" +
        "`antiroledelete limit 5`\n" +
        "`antiroledelete action ban`",
    antiroledelete_enabled: "AntiRoleDeleteオンライン!",
    antiroledelete_disabled: "AntiRoleDeleteオフライン!",
    antiroledelete_acted: "[ANTIROLEDELETE]多数のユーザー削除済みロールが検出されました",
    //antiroledelete action
    antiroledelete_action_use: "antiroledelete action [Ban | Kick | Warn | Mute]",
    antiroledelete_action_description: "ユーザーが設定された制限を超えた場合にボットが実行する必要のあるアクションを設定します",
    antiroledelete_action_examples: "`antiroledelete action ban`",
    antiroledelete_action_updated: (action) => {
        return `更新されたAntiRoleDeleteアクション、**アクション**：\`${action} \``
    },
    //antiroledelete limit
    antiroledelete_limit_use: "antiroledelete limit [ナンバー]",
    antiroledelete_limit_description: "AntiNukeのAntiRoleDeleteの制限を設定します",
    antiroledelete_limit_examples: "`antiroledelete limit 3`",
    antiroledelete_limit_updated: (limit) => {
        return `AntiRoleDeleteの制限を変更しました。**新しい制限**：\`${limit} \``
    },
    //antichannelcreate
    antichannelcreate_use: "antichannelcreate [limit | action | enable/disable] {オプションス}",
    antichannelcreate_description: "AntiChannelCreateは、短時間で多くのチャンネルを作成するユーザーに作用するAntiNukeの機能です。\n\n" +
        ":small_blue_diamond: \`antichannelcreate enable/disable\`\n" +
        "AntiChannelCreateを有効/無効にする\n" +
        ":small_blue_diamond: \`antichannelcreate limit [ナンバー]\`\n" +
        "AntiChannelCreateをアクティブ化するために必要な作成されたチャネルの数を変更します\n" +
        ":small_blue_diamond: \`antichannelcreate action [制裁]\`\n" +
        "AntiChannelCreate制裁を変更する",
    antichannelcreate_small_desc: "AntiNukeのAntiChannelCreate設定を変更します",
    antichannelcreate_examples: "`antichannelcreate enable`\n" +
        "`antichannelcreate disable`\n" +
        "`antichannelcreate limit 5`\n" +
        "`antichannelcreate action ban`",
    antichannelcreate_enabled: "AntiChannelCreateオフライン!",
    antichannelcreate_disabled: "AntiChannelCreateオフライン!",
    antichannelcreate_acted: "[ANTICHANNELCREATE] ユーザー作成チャンネルの大規模ななんバーが検出されました",
    //antichannelcreate action
    antichannelcreate_action_use: "antichannelcreate action [Ban | Kick | Warn | Mute]",
    antichannelcreate_action_description: "ユーザーが設定された制限を超えた場合にボットが実行する必要のあるアクションを設定します",
    antichannelcreate_action_examples: "`antichannelcreate action ban`",
    antichannelcreate_action_updated: (action) => {
        return `更新されたAntiChannelCreateアクション、**アクション**：\`${action} \``
    },
    //antichannelcreate limit
    antichannelcreate_limit_use: "antichannelcreate limit [ナンバー]",
    antichannelcreate_limit_description: "AntiNukeのAntiChannelCreateの制限を設定します",
    antichannelcreate_limit_examples: "`antichannelcreate limit 3`",
    antichannelcreate_limit_updated: (limit) => {
        return `AntiChannelCreateの制限が変更され、**新しい制限**：\`${limit} \``
    },
    //antichanneldelete
    antichanneldelete_use: "antichanneldelete [limit | action | enable/disable] {オプションス}",
    antichanneldelete_description: "L'AntiChannelDelete e' una funzione dell'AntiNuke che agisce sugli utenti che eliminano molti canali in poco 時間\n\n" +
        ":small_blue_diamond: \`antichanneldelete enable/disable\`\n" +
        "AntiChannelDeleteを有効/無効にする\n" +
        ":small_blue_diamond: \`antichanneldelete limit [ナンバー]\`\n" +
        "AntiChannelDeleteをアクティブ化するために必要な削除されたチャネルのなんバーを変更します\n" +
        ":small_blue_diamond: \`antichanneldelete action [制裁]\`\n" +
        "AntiChannelDeleteの制裁を変更します",
    antichanneldelete_small_desc: "AntiNukeのAntiChannelDelete設定を変更します",
    antichanneldelete_examples: "`antichanneldelete enable`\n" +
        "`antichanneldelete disable`\n" +
        "`antichanneldelete limit 5`\n" +
        "`antichanneldelete action ban`",
    antichanneldelete_enabled: "AntiChannelDeleteオンライン!",
    antichanneldelete_disabled: "AntiChannelDeleteオフライン!",
    antichanneldelete_acted: "[ANTICHANNELDELETE]ユーザーが削除したチャンネルの大規模ななんバーが検出されました",
    //antichanneldelete action
    antichanneldelete_action_use: "antichanneldelete action [Ban | Kick | Warn | Mute]",
    antichanneldelete_action_description: "ユーザーが設定された制限を超えた場合にボットが実行する必要のあるアクションを設定します",
    antichanneldelete_action_examples: "`antichanneldelete action ban`",
    antichanneldelete_action_updated: (action) => {
        return `AntiChannelDeleteアクションが更新され、**アクション**：\`${action} \``
    },
    //antichanneldelete limit
    antichanneldelete_limit_use: "antichanneldelete limit [ナンバー]",
    antichanneldelete_limit_description: "AntiNukeのAntiChannelDeleteの制限を設定します",
    antichanneldelete_limit_examples: "`antichanneldelete limit 3`",
    antichanneldelete_limit_updated: (limit) => {
        return `AntiChannelDeleteの制限が変更され、**新しい制限**：\`${limit} \``
    },
    //antinuke global
    antinukeglobal_use: "antinuke global [ナンバー]",
    antinukeglobal_description: "**AntiNukeのグローバル制限を設定します**\n" +
        "グローバル制限は、ユーザーによってコミットされ、過去±30秒間にBOTのAntiNukeによって記録されたすべてのアクションの合計です。\n" +
        "**BOTは、アクティブ化された機能のアクションのみをカウントし、AntiNukeのどの機能がアクティブ化されているかを確認します。 `antinuke info`**",
    antinukeglobal_small_desc: "AntiNukeのグローバル制限を設定します",
    antinukeglobal_examples: "`antinuke global 10`",
    antinukeglobal_updated: (limit) => {
        return `AntiNukeのグローバル制限が変更されました。**新しい制限**：\`${limit} \``
    },
    antinukeglobal_warnings: "[ANTINUKE] AntiNukeのグローバル制限を超えていることを警告します",
    //antinuke info
    antinuke_info_title: "AntiNuke設定",
    antinuke_info_description: "このパネルには、AntiNukeの現在のすべての設定が表示されます" +
        "`antinuke [セックション]`を使用するか、個々の `antiban {...}`コマンドを使用して、さまざまな設定を変更できます。",
    antinuke_info_global_title: "グローバルリミット",
    //antiraid
    antiraid_use: "antiraid [limit | action | enable/disable | time] {オプションス}",
    antiraid_description: "AntiRaidを使用すると、短時間で多くのユーザーの侵入からサーバーを保護できます\n\n" +
        ":small_blue_diamond: \`antiraid enable/disable\`\n" +
        "AntiRaidを有効/無効にする\n" +
        ":small_blue_diamond: \`antiraid limit [ナンバー]\`\n" +
        "AntiRaidを有効にするために必要な一定時間内にログインしたユーザーのなんバーを変更する\n" +
        ":small_blue_diamond: `antiraid time [時間]`\n" +
        "RAIDが決定される時間を**秒単位で**設定します \n" +
        ":small_blue_diamond: \`antiraid action [制裁]\`\n" +
        "AntiRaid制裁を変更する",
    antiraid_small_desc: "AntiRaid設定を変更します",
    antiraid_examples: "`antiraid enable`\n" +
        "`antiraid disable`\n" +
        "`antiraid time 6`\n" +
        "`antiraid limit 5`\n" +
        "`antiraid action ban`",
    antiraid_enabled: "AntiRaidオンライン!",
    antiraid_disabled: "AntiRaidオフライン!",
    antiraid_acted: "[ANTIRAID]同時にログインしているユーザーの大規模ななんバーを検出しました",
    //antiraid limit
    antiraid_limit_use: "antiraid limit [リミット]",
    antiraid_limit_description: "決定された時間に入力されたユーザーの最大なんバーを設定します\n" +
        "**リミを増やすほど、ログインしてアクティベートするユーザーが増えます**",
    antiraid_limit_small_desc: "決定された時間に入力されたユーザーの最大なんバーを設定します",
    antiraid_limit_examples: "`antiraid limit 5`",
    antiraid_limit_min: "AntiRaidの最小リミットは3ユーザーです",
    antiraid_limit_updated: (limit) => {
        return `修正されたAntiRaidのリミスト**新しいリミット**：\`${limit} \``
    },
    //antiraid action
    antiraid_action_use: "antiraid action [Ban | Kick | Warn | Mute]",
    antiraid_action_description: "ボットがRAIDを検出したときに実行するアクションを設定します",
    antiraid_action_small_desc: "ボットがRAIDを検出したときに実行するアクションを設定します",
    antiraid_action_examples: "`antiraid action ban`\n" +
        "`antiraid action none`",
    antiraid_action_updated: (action) => {
        return `AntiRaidアクションが更新され、**アクション**：\`${アクション} \``
    },
    //antiraid time
    antiraid_time_use: "antiraid time [Secondi]",
    antiraid_time_description: "RAIDが決定される時間**を秒単位で設定**",
    antiraid_time_small_desc: "RAIDが決定される時間**を秒単位で設定**",
    antiraid_time_examples: "`antiraid time 4`",
    antiraid_time_min: "AntiRaidの時間リミットの最小値は3秒です",
    antiraid_time_updated: (time) => {
        return `更新されたAntiRaid、**新しい**：\`${time}秒\``
    },
    //autoaction
    autoaction_use: "autoaction [add | remove | list] {オプションス}",
    autoaction_description: "ユーザーが警告の特定のなんバーに達したときに実行するアクションを設定します\n\n" +
        ":small_blue_diamond: `autoaction add [ナンバー] [ban | kick | mute] {時間}`\n" +
        "ボットが実行するアクションを警告に追加します\n" +
        ":small_blue_diamond: `autoaction remove [ナンバー]`\n" +
        "AutoActionアクションを削除します\n" +
        ":small_blue_diamond: `autoaction list`\n" +
        "特定の数の警告でボットが実行するアクションを表示します",
    autoaction_small_desc: "ボットの自動アクションを特定の警告に変更します",
    autoaction_examples: "`autoaction list`\n" +
        "`autoaction remove 2`\n" +
        "`autoaction add 3 kick`\n" +
        "`autoaction add 5 ban 2d`",
    //autoaction add
    autoaction_add_use: "autoaction add [ナンバー] [ban | kick | mute] {時間}",
    autoaction_add_description: "**利用可能な株式**:\n" +
        "`ban (時間)` = サーバーからユーザーを追放する, 「時間」がオプションです\n" +
        "`kick` = ユーザーをサーバーから追い出します\n" +
        "`mute (時間)` = ユーザーをミュートする, 「時間」がオプションです\n" +
        "**注**： `setmuterole [ロール]`を使用してミュートの役割を選択する必要があります",
    autoaction_add_examples: "`autoaction add 5 mute 12h`",
    autoaction_already_exists: (number) => {
        return `\`${number} \`警告用に設定された別のプロビジョニングがすでにあります。 \`autoaction list \`コマンドで他の対策を確認してください`
    },
    autoaction_added: (number, action, time) => {
        let real_action


        switch (action) {
            case 'ban':
                real_action = '禁止された'
                break
            case 'kick':
                real_action = '追放'
                break
            case 'mute':
                real_action = 'ミュートする'
                break
            default:
                real_action = "?"
                break
        }

        let send = `設定が更新され、\`${number} \`に到達すると警告され、ユーザーは${real_action}になります`

        if (time !== null) {
            send = send + '一時的に'
        }

        return send
    },
    //autoaction remove
    autoaction_remove_use: "autoaction remove [ナンバー]",
    autoaction_remove_description: "AutoActionを削除する",
    autoaction_remove_examples: "`autoaction remove 3`",
    autoaction_dont_exists: (number) => {
        return `\`${number} \`警告のプロビジョニングは設定されていません。 \`autoaction list \コマンドで対策を確認してください`
    },
    autoaction_removed: "メジャーを削除",
    //autoaction list
    autoaction_list_description: "**メジャーセット**:",
    autoaction_list_null: "プロビジョニングセットなし:(",
    //autoaction reasons
    autoaction_reason: "[AUTOACTION] 事前に設定された警告に到達しました",
    //autodelwarn
    autodelwarn_use: "autodelwarn [enable/disable | Set] {時間}",
    autodelwarn_description: "この機能を使用すると、一定時間後の警告を削除できます\n" +
        ":small_blue_diamond: `autodelwarn enable/disable`\n" +
        "警告の自動キャンセルを有効/無効にします\n" +
        ":small_blue_diamond: `autodelwarn set [時間]\n`" +
        "警告が自動的にクリアされるまでの時間を設定します",
    autodelwarn_small_desc: "警告が自動的にクリアされるまでの時間を設定します",
    autodelwarn_examples: "`autodelwarn enable`\n" +
        "`autodelwarn set 1M`",
    autodelwarn_enabled: "AutoDelWarnオンライン!",
    autodelwarn_disabled: "AutoDelWarnオフライン!",
    //autodelwarn set
    autodelwarn_set_use: "autodelwarn set [時間]",
    autodelwarn_set_description: "警告が自動的にクリアされるまでの時間を設定します",
    autodelwarn_set_examples: "`autodelwarn set 1m`",
    autodelwarn_set_updated: (time) => {
        return `更新されたAutoDelWarnの時間、**新しい**：\`${time} \``
    },
    //blacklist
    blacklist_use: "blacklist [enable/disable | add/remove | action | list] {オプションス}",
    blacklist_description: "ブラックリストは、文に含まれている場合でも自動的に削除される禁止単語のリストです。**ボットは、類似した文/単語（特殊な文字またはわずかに異なる文字を含む）も検出しようとします**\n\n" +
        ":small_blue_diamond: `blacklist enable/disable`\n" +
        "サーバーのブラックリストを有効/無効にする\n" +
        ":small_blue_diamond: `blacklist add/remove [Parola/Frase]`" +
        "ブラックリストに単語やフレーズを追加/削除する\n" +
        ":small_blue_diamond: `blacklist action [Azione]`\n" +
        "禁止されている単語/フレーズを検出したときにボットが実行するアクションを変更し、ユーザーに対してアクションを実行しないアクションとして**none**を使用します（メッセージの削除に加えて）\n" +
        ":small_blue_diamond: `blacklist list`\n" +
        "禁止されている単語やフレーズの現在のリストを表示する",
    blacklist_small_desc: "ブラックリスト設定を開く",
    blacklist_examples: "\`blacklist enable\`\n" +
        "\`blacklist add \"parola\"\`\n" +
        "\`blacklist add \"una frase\" \`\n" +
        "\`blacklist remove parola\`\n" +
        "\`blacklist action ban\`\n" +
        "\`blacklist list\`",
    blacklist_enabled: "BlackListオンライン!",
    blacklist_disabled: "BlackListオフライン!",
    blacklist_add_remove_use: "blacklist add/remove [単語/フレーズ]",
    blacklist_add_remove_description: " ブラックリストに単語またはフレーズを追加/削除し、「\`blacklist list\`」を使用して禁止されている単語/フレーズを表示します",
    blacklist_add_remove_examples: "\`blacklist add \"語\"\`\n" +
        "\`blacklist add \"フレーズ\"\`\n" +
        "\`blacklist remove \"語\"\`\n" +
        "\`blacklist remove \"フレーズ\"\`\n",
    blacklist_word_already_added: "入力した単語/フレーズはすでにブラックリストに含まれています",
    blacklist_word_not: "入力した単語/フレーズがブラックリストに含まれていません",
    blacklisted_word_added: (word) => {
        return `ブラックリストが更新され、**追加されました**：\`${word} \``
    },
    blacklisted_word_removed: (word) => {
        return `ブラックリストを更新、**削除**：\`${word} \``
    },
    blacklisted_words: "禁じられた言葉",
    blacklist_list_clear: "禁じられた言葉はありません:(",
    blacklist_acted: "[NISD AUTOMOD] 禁止されている単語が検出されました!",
    blacklist_in_action: (member) => {
        return `${member}**, 禁止語が検出されました！**`
    },
    blacklist_action_use: "blacklist action [Ban | Kick | Warn | Mute | None]",
    blacklist_action_description: "ユーザーが以下を含むメッセージを送信した場合にボットが実行する必要のあるアクションを設定します" +
        " 許可されていない単語の場合は、**none**を使用してアクションを実行しません（メッセージの削除以外）",
    blacklist_action_examples: "`blacklist action ban`",
    blacklist_action_updated: (action) => {
        return `更新されたブラックリストアクション、**アクション**: \`${action}\``
    },
    blacklist_action_removed: "ブラックリストアクションが削除されました",
    //bypassrole
    bypassrole_use: "bypassrole [add / remove | list] {@ロール/ID}",
    bypassrole_description: "AutoModによって役割のリストを作成する\"無視された\"\n\n" +
        ":small_blue_diamond: \`bypassrole add/remove [@ロール/ID]\`\n" +
        "AutoModによって\"無視される\"になるロールを追加/削除します\n" +
        ":small_blue_diamond: \`bypassrole list\`\n" +
        "AutoModによって\"無視された\"すべての役割のリストを表示する",
    bypassrole_small_desc: "AutoModの役割を無視するように設定する",
    bypassrole_examples: "\`bypassrole add @ロール\`\n" +
        "\`bypassrole remove id\`\n" +
        "\`bypassrole list\`",
    //bypassrole add/remove
    bypassrole_add_remove_use: "bypassrole add/remove [@ロール/ID]",
    bypassrole_add_remove_description: "AutoModによって\"無視される\"になるロールを追加/削除します",
    bypassrole_add_remove_examples: "\`bypassrole add @ロール\`\n" +
        "\`bypassrole remove id\`\n",
    bypassrole_role_already: "選択したロールはすでに無視されています",
    bypassrole_role_not: "選択したロールは無視された役割のリストにありません",
    bypassrole_role_added: (role) => {
        return `ロール追加、**ロール**: ${role}`
    },
    bypassrole_role_removed: (role) => {
        return `ロール削除、**ロール**: ${role}`
    },
    bypassrole_ignored_roles: "無視された役割",
    bypassrole_clear: "ないール無視",
    //bypasschannel
    bypasschannel_use: "bypasschannel [add/remove | list] {#チャンネル/ID}",
    bypasschannel_description: "ボットのAutoModによって無視されるチャネルのリストを作成します\n\n" +
        ":small_blue_diamond: \`bypasschannel add/remove [#チャンネル/ID]\`\n" +
        "無視されたチャンネルリストからチャンネルを追加/削除\n" +
        ":small_blue_diamond:\`bypasschannel list\`\n" +
        "無視されたチャネルのリストを表示する",
    bypasschannel_small_desc: "AutoModのチャンネルを無視するように設定する",
    bypasschannel_examples: "\`bypasschannel add #チャンネル\`\n" +
        "\`bypasschannel remove id\`\n" +
        "\`bypasschannel list\`",
    //bypasschannel add/remove
    bypasschannel_add_remove_use: "bypasschannel add/remove [@ロール/ID]",
    bypasschannel_add_remove_description: "AutoModによって\"無視される\"チャネルを追加/削除する",
    bypasschannel_add_remove_examples: "\`bypasschannel add #チャンネル\`\n" +
        "\`bypasschannel remove id\`\n",
    bypasschannel_channel_already: "選択したチャンネルはすでに無視されています",
    bypasschannel_channel_not: "選択したチャンネルは無視されたチャンネルリストにありません",
    bypasschannel_channel_added: (channel) => {
        return `チャンネル追加、**チャンネル**: ${channel}`
    },
    bypasschannel_channel_removed: (channel) => {
        return `チャンネルが削除されました、**チャンネル**: ${channel}`
    },
    bypasschannel_ignored_channels: "無視されたチャネル",
    bypasschannel_clear: "無視されるチャネルはありません",
    //Captcha
    captcha_use: "captcha [カテゴリー] {オプションス}",
    captcha_description: "Captchaによる検証では、検証のためにコードを書き直す必要があるユーザーに個人的にコードを送信できます\n" +
        "以下の各コマンドには、詳細情報が含まれている個別のヘルプページが含まれています\n" +
        "**動作するには、検証にロールを割り当てる必要があり、ログのチャネルを設定することをお勧めします。**\n\n" +
        ":small_blue_diamond: `captcha enable/disable`\n" +
        "キャプチャによる検証の有効化/無効化\n" +
        ":small_blue_diamond: `captcha mode [fake | new | all]`\n" +
        "ユーザーを実行するユーザーを設定する\n" +
        ":small_blue_diamond: `captcha role [@ロール/ID]`\n" +
        "完全に確認されたときにユーザーに追加するロールを選択します\n" +
        ":small_blue_diamond: `captcha action [ban | kick | mute | none]`\n" +
        "検証に失敗したユーザーに対してボットが講じる対策を選択します\n" +
        ":small_blue_diamond: `captcha time [分]`\n" +
        "ユーザーがコードを入力する必要がある分数を設定します\n" +
        ":small_blue_diamond: `captcha bypass [@Membro/ID]`\n" +
        "ユーザーに確認をスキップさせる\n" +
        ":small_blue_diamond: `captcha resend [@Membro/ID]`\n" +
        "ユーザーに再確認してもらう\n" +
        ":small_blue_diamond: `captcha log-channel [#チャンネル/ID | None]`\n" +
        "検証に関するすべての情報を受信するチャネルを選択します\n" +
        ":small_blue_diamond: `captcha toggle-role [@ロール/ID | None]`\n" +
        "ユーザーが発生したら削除するロールを選択します\n" +
        ":small_blue_diamond: `captcha info`\n" +
        "キャプチャ検証の現在の構成を表示します",
    captcha_examples: "コマンドの数が多いため、すべての例がさまざまなカテゴリに表示されます^^",
    captcha_small_desc: "キャプチャ検証を構成する",
    //captcha
    captcha_enabled: "キャプチャオフライン",
    captcha_disabled: "キャプチャオフライン",
    //captcha mode
    captcha_mode_use: "captcha mode [fake | new | all]",
    captcha_mode_description: "リストされている事前に作成されたモードを使用して確認するユーザーを設定します\n" +
        "`fake` = 未成年のユーザーを\`2〜3時間\`で確認します\n" +
        "`new` = 最近Discordにサインアップしたユーザーを確認する\`〜15日\`\n" +
        "`all` = \`すべてのユーザー\`を確認する\n\n" +
        "**明らかに、ユーザーがモードの時間範囲内にない場合、ユーザーは自動的に検証されます**",
    captcha_mode_examples: "\`captcha mode all\`",
    captcha_mode_updated: (mode) => {
        return `キャプチャ検証モードが変更されました、**モード**：\`${mode} \``
    },
    //captcha role
    captcha_role_use: "captcha role [@ロール/ID]",
    captcha_role_description: "完全な検証のためにユーザーに追加するロールを追加します",
    captcha_role_examples: "\`captcha role 123456789\`\n" +
        "\`captcha role @ロール\`",
    captcha_role_updated: (role) => {
        return `更新された検証のロール、**ロール**: ${role}`
    },
    //captcha action
    captcha_action_use: "captcha action [Ban | Kick | Warn | Mute | None]",
    captcha_action_description: "検証が失敗した場合にBOTが実行する必要のあるアクションを設定します",
    captcha_action_examples: "`captcha action ban`",
    captcha_action_updated: (action) => {
        return `更新されたキャプチャ検証のアクション、**アクション**: \`${action}\``
    },
    captcha_action_removed: "キャプチャ検証アクションが削除されました",
    //captcha time
    captcha_time_use: "captcha time [分]",
    captcha_time_description: "ユーザーが検証を実行する必要のある分数を設定します**試行ごと**、**最大60分**",
    captcha_time_examples: "`captcha time 15`",
    captcha_time_updated: (time) => {
        return `キャプチャのタイミングを更新、**時間**: \`${time} 分\``
    },
    captcha_time_invalid_time: "入力するなんバーは1から60の間でなければなりません",
    //captcha log-channel
    captcha_logchannel_use: "captcha log-channel [#チャンネル/ID | None]",
    captcha_logchannel_description: "キャプチャを介してすべての検証ログを送信するようにチャネルを設定し、**なし**を使用してチャネルを削除します",
    captcha_logchannel_examples: "`captcha log-channel #チャンネル`\n`captcha log-channel 133243243525324`\n`captcha log-channel none`",
    captcha_logchannel_updated: (channel) => {
        if (channel === null) {
            return "ログチャネルが無効"
        } else {
            return `セットキャプチャのログのチャネル、**チャネル**: ${channel}`
        }
    },
    //captcha toggle-role
    captcha_togglerole_use: "captcha toggle-role [@ロール/ID | None]",
    captcha_togglerole_description: "ユーザーが発生したら削除するロールを選択し、**なし**を使用してこの機能を無効にします",
    captcha_togglerole_examples: "`captcha toggle-role @ロール`\n`captcha toggle-role none`\n`captcha toggle-role 12321432432545`",
    captcha_togglerole_updated(role) {
        if (role === null) {
            return "無効を削除するロール"
        } else {
            return `ロールチェックが設定されると削除されます**ロール**: ${role}`
        }
    },
    //CAPTCHA EMBEDS
    captcha_embed_title: "リクエストの確認",
    captcha_embed_retry_title: "検証に失敗しました。再試行してください",
    captcha_embed_failed_title: "検証に失敗しました",
    captcha_embed_impossible_title: "検証不可能",
    captcha_embed_stopped_title: "検証がキャンセルされました",
    captcha_embed_auto_title: "自動検証",
    captcha_embed_auto_started_title: "自動検証開始",
    captcha_embed_started_title: "検証開始",
    captcha_embed_completed_title: "検証が完了しました",
    captcha_embed_error_title: "検証中のエラー",
    captcha_acted: "キャプチャによる検証に失敗しました",
    captcha_embed_bypass_title: "検証がバイパスされました",
    autocaptcha_embed_impossible_title: "自動検証、不可能",
    captcha_embed_description: (minutes, tries) => {
        return `**サーバーにアクセスするには、このチャットで以下のコードを送信する必要があります**\n` +
            `**コードを送信する時間**: \`${minutes} 分\`\n` +
            `**残りの試み**: \`${tries}\`\n\n` +
            `**送信するコード**:`
    },
    captcha_embed_retry_description: (mode) => {
        if (mode === "time") {
            return "タイムアウト"
        } else if (mode === "fail") {
            return "不正なコード"
        } else if (mode === "tries") {
            return "試行は終了しました"
        }
    },
    captcha_embed_stopped_description: (member) => {
        return `ユーザー ${member.user.username}#${member.user.discriminator} || ID: \`${member.user.id}\` 彼はサーバーを終了したため、検証はキャンセルされました`
    },
    captcha_embed_started_description: (member) => {
        return `ユーザー ${member.user.username}#${member.user.discriminator} || ID: \`${member.user.id}\` 検証を開始しました`
    },
    captcha_embed_auto_description_user: "サーバーにすでにロールがあることが検出されたため、自動的に検証されました",
    captcha_embed_auto_description: (member) => {
        return `ユーザー ${member.user.username}#${member.user.discriminator} || ID: \`${member.user.id}\` 追加するロールがあったので、自動的にチェックされました`
    },
    captcha_embed_completed_description_user: "検証に成功すると、すぐにロールが届きます",
    captcha_embed_completed_description: (member) => {
        return `ユーザー ${member.user.username}#${member.user.discriminator} || ID: \`${member.user.id}\` 正常に発生しました`
    },
    captcha_embed_failed_description: (member) => {
        return `ユーザー ${member.user.username}#${member.user.discriminator} || ID: \`${member.user.id}\` 検証に失敗しました`
    },
    captcha_embed_auto_started_description: (member) => {
        return `ユーザー ${member.user.username}#${member.user.discriminator} || ID: \`${member.user.id}\` 検証アクションの範囲内にない、検証がバイパスされた`
    },
    captcha_embed_bypass_description: (user, bypassMember) => {
        return `ユーザー ${user.username}#${user.discriminator} || ID: \`${user.id}\`はユーザーの検証をバイパスしました ${bypassMember.user.username}#${bypassMember.user.discriminator} || ID: \`${bypassMember.user.id}\``
    },
    //CAPTCHA ERRORS
    captcha_owner_error: (member, error) => {
        return `ユーザーの確認中にエラーが発生したようです \`${member.user.username}#${member.user.discriminator} || ${member.user.id}\`\n\n` +
            `**エラー**: \`${error}\`\n\n` +
            `*これらのメッセージを受信したくない場合は、キャプチャログチャネルを設定することをお勧めします*`
    },
    captcha_error_invalid_role: "完全な検証に割り当てられるロールが欠落しているか無効です",
    captcha_error_invalid_togglerole: "完全検証時に削除されるロールがない/無効",
    captcha_error_invalid_permissions: "ボットには必要な権限がないため、ボットは検証を実行できません",
    captcha_error_dm_blocked: (member) => {
        return `ユーザー \`${member.user.username}#${member.user.discriminator} || ID ${member.user.id}\` DMがロックされているため、確認できません`
    },
    captcha_error_user: "構成上の問題により確認できません",
    //CAPTCHA BYPASS
    captcha_bypass_use: "captcha bypass [@Utente/ID]",
    captcha_bypass_description: "ユーザーに確認をスキップさせる",
    captcha_bypass_examples: "\`captcha bypass @Polliog\`\n" +
        "\`captcha bypass 173569203977060353\`",
    captcha_bypassed_cmd: "ユーザーは正常に確認されました",
    //CAPTCHA RESEND
    captcha_resend_use: "captcha resend [@Utente/ID]",
    captcha_resend_description: "ユーザーに再確認してもらう",
    captcha_resend_examples: "\`captcha resend @Polliog\`\n" +
        "\`captcha resend 173569203977060353\`",
    captcha_resend_cmd: "検証が正常に開始されました",
    //TICKETS
    //TICKETS INTERNAL
    ticketsInt_opened: "チケットオープン",
    ticketsInt_openedInChannel: (channel) => `チャンネルでチケットを開く ${channel}`,
    ticketsInt_openedby: (member) => `${member}によって開かれたチケット`,
    ticketsInt_reopenedby: (member) => `${member}によって再開されたチケット`,
    ticketsInt_reopened: "チケット再開",
    ticketsInt_panel: "パネル",
    ticketsInt_ticket: "チケット",
    ticketsInt_close: "選ぶ",
    ticketsInt_closed: "ロックダウン",
    ticketsInt_closedPhrase: "チケットは終了しました",
    ticketsInt_closedby: (member) => `${member}によって閉じられたチケット`,
    ticketsInt_closedOptions: "📝：チケットを書き留めます\n\n🗑️：チケットを削除します\n\n🔁：チケットを再度開きます",
    ticketsInt_transcriptSavedTitle: "音声文字変換が保存されました",
    ticketsInt_transcriptSavedDescriptionChannel: (channel) => `チャネル${channel}で送信されたトランスクリプト`,
    ticketsInt_transcriptSavedDescriptionUser: (user) => `${user}によって保存されたトランスクリプト`,
    ticketsInt_transcriptSavedInfos: "トランスクリプトを表示するには、上記の添付ファイルをダウンロードしてください",
    ticketsInt_delete_ask: "このチケットを本当に削除しますか？",
    ticketsInt_deleted_logs: "チケットが削除されました",
    //TICKETS COMMANDS
    tickets_use: "tickets [カテゴリー] {オプションス}",
    tickets_description: "チケットを使用すると、適切なコマンドを使用してチケットを作成することにより、ユーザーからのリクエストをより整然と管理できます" +
        "プライベートチケットを作成するために操作できる `パネル`（下にボタンが付いたメッセージ）を作成します。\n" +
        "**チケットは、それらが作成されたカテゴリーから許可を取得します**\n\n" +
        ":small_blue_diamond: `ticket create`\n" +
        "チケットを作成するためのパネルの作成を開始します\n" +
        ":small_blue_diamond: `ticket panel [panelID]`\n" +
        "以前に作成したパネルを再作成します\n" +
        ":small_blue_diamond: `ticket edit [panelID]`\n" +
        "パネルの設定を変更する\n" +
        ":small_blue_diamond: `ticket delete [panelID]`\n" +
        "パネルを完全に削除する\n" +
        ":small_blue_diamond: `ticket logs [#チャンネル/ID | None]`\n" +
        "チケットログのチャネルを設定し、\`none\`と入力してログを無効にします\n" +
        ":small_blue_diamond: `ticket transcript-logs [#チャンネル/ID | None]`\n" +
        "ログ以外のチャネルでトランスクリプトを送信するようにチャネルを設定し、\ `none \`と入力してログを無効にします\n" +
        ":small_blue_diamond: `ticket info (panelID)`\n" +
        "パネルに関する情報を表示します。パネルが入力されていない場合は、すべてのパネルが表示されます\n" +
        ":small_blue_diamond: `ticket [Open/Close/Transcript]`\n" +
        "コマンドが実行されたチケットを開く/閉じるまたは書き留めます",
    tickets_examples: "コマンドの数が多いため、すべての例がさまざまなカテゴリに表示されます^^",
    tickets_small_desc: "キャプチャ検証を構成する",
    //tickets create
    tickets_creation_sys: "チケット作成システム",
    tickets_create_message: "新しいパネルの作成を開始しますか？\n **パネルはこのチャネルで作成されます**",
    ticket_create_exited: "パネル作成をキャンセルしました",
    tickets_create_insert_title: "チケットのタイトルを入力します",
    tickets_create_insert_message: "新しいチケットが作成されたときにボットが送信するメッセージを入力します",
    tickets_create_insert_category: "チケットを作成するカテゴリーのIDまたは名前を入力します。\n\n" +
        "**注**：チケット（チャネル）は、このカテゴリーから許可を取得します",
    tickets_create_invalid_category: "カテゴリー無効、もう一度やり直してください",
    tickets_create_insert_upmessage: "埋め込みの外側にメッセージを入力します。これは、サポートの役割にpingを送信するのに役立ちます",
    tickets_create_insert_role: "IDを入力するか、チケットを処理する必要があるロールにタグを付けます。\n\n" +
        "**注**：このロールには、チケット（チャネル）への書き込み権限が強制的に追加されます*必要に応じて*",
    tickets_create_invalid_role: "ロール無効、再試行してください",
    tickets_create_confirm_message: "次の設定で新しいパネルの作成を確認しますか？",
    tickets_create_confirm_message_how: "確認するには\`y \`と入力し、キャンセルするには\`n \`と入力します",
    //tickets general
    tickets_panel: 'チケットを作成するには、ボタンをクリックします:tickets:下',
    tickets_panel_footer: "Tikets by NISD",
    create_ticket: "チケットを作成する",
    //ticket panel
    invalid_ticket_panel: 'パネルが見つかりません。既存のパネルのIDを確認するには、\ `チケット情報\`を使用してください',
    tickets_panel_use: "ticket panel [panelID]",
    tickets_panel_description: "以前に作成したパネルを再作成します",
    tickets_panel_examples: "ticket panel ID",
    //ticket edit
    tickets_edit_title: "何を変えたいですか？",
    tickets_edit_sys: "チケット変更システム",
    tickets_edit_use: "ticket edit [panelID]",
    tickets_edit_description: "パネルの設定を変更する\n",
    tickets_edit_exited: "変更はキャンセルされました",
    tickets_edit_examples: "ticket edit ID",
    tickets_edited: "パネル設定が保存されました",
    tickets_edited_title: "パネル設定が保存されたら、\`ticket panel [panelID] \`コマンドを使用して有効にします",
    //ticket delete
    tickets_delete_use: "ticket delete [panelID]",
    tickets_delete_description: "パネルを完全に削除する\n",
    tickets_delete_examples: "ticket delete ID",
    tickets_delete_title: (panelID) => {
        return `チケットパネルを削除する \`${panelID}\`?`
    },
    tickets_delete_confirmed: ":accepted_gif: チケットパネルが削除されました",
    tickets_delete_exited: ":negato_gif: 操作をキャンセルしました",
    tickets_delete_sys: "チケット消去システム",
    //ticket info
    tickets_info_title: "NISDチケット情報",
    tickets_info_description: (logs, tlogs) => {
        return `**ログ**: ${logs}\n**トランスクリプトログ**: ${tlogs}\n`
    },
    //ticket logs
    tickets_logs_use: "ticket logs [#チャンネル/ID | None]",
    tickets_logs_description: "チケットログのチャネルを設定し、\`none \`と入力してログを無効にします",
    tickets_logs_examples: "ticket logs ID\nticket logs none",
    tickets_logs_success: (none, channel) => {
        return none ? "今後、チケット関連のログは送信されなくなります " : `チケットログチャネルが更新されました。新しいチャネル: ${channel}`
    },
    //ticket transcript-logs
    tickets_transcriptlogs_use: "ticket transcript-logs [#チャンネル/ID | None]",
    tickets_transcriptlogs_description: "ログ以外のチャネルでトランスクリプトを送信するようにチャネルを設定し、\`none \`と入力してログを無効にします",
    tickets_transcriptlogs_examples: "ticket transcript-logs ID\nticket transcript-logs none",
    tickets_transcriptlogs_success: (none, channel) => {
        return none ? "今後、文字起こしはログチャネル（設定されている場合）またはチケット（設定されていない場合）に返送されます " : `更新された文字起こしチャネル、新しいチャネル: ${channel}`
    },
    //language
    lang_use: "lang [language]",
    lang_description: "このサーバー上のボットの言語を選択してください",
    lang_examples: "`lang it`\n`lang en`\n`lang jp`\n`lang ru`",
    //autoroles
    autoroles_use: "autoroles [user bot | list] {ロール}",
    autoroles_description: "ユーザー/ボットがサーバーに入るとすぐに追加する役割を設定します。同じ役割でコマンドをやり直すと、リストから削除されます\n\n" +
        ":small_blue_diamond: `autoroles user/bot [@Role/ID]`\n" +
        "リストから役割を追加/削除します\ n" +
        ":small_blue_diamond: `autoroles list`\n" +
        "現在のオートロールを確認してください",
    autoroles_examples: "`autoroles user @Role`\n" +
        "`autoroles bot id`\n" +
        "`autoroles list`",
    autoroles_small_desc: "新しいユーザー/ボットに役割を自動的に追加します",
    autoroles_add: (role) => { return `autorolesに${role}を追加しました` },
    autoroles_remove: (role) => { return `autorolesから${role}を削除しました` },
    //autoroles list
    autoroles_list: "AutoRolesリスト",
    //logs
    logs_use: "logs",
    logs_description: "ログを使用すると、サーバーで実行されたすべてのアクションを追跡できます\n\n" +
        "**この機能は、[[ダッシュボード]](https://nisdbot.xyz/)を介してのみ構成できます。**",
    logs_small_description: "ログを使用すると、サーバーで実行されたすべてのアクションを追跡できます",
    //logs events
    logs_channelCreate_description: (channel) => {
        switch (channel.type) {
            case "GUILD_TEXT":
                return `新しいテキストチャネルが作成されました (${channel})`
            case "GUILD_VOICE":
            case "GUILD_STAGE_VOICE":
                return `新しい音声チャネルが作成されました (${channel})`
            case "GUILD_CATEGORY":
                return `新しいカテゴリが作成されました (${channel})`
            default:
                return `新しいチャネルが作成されました (${channel})`

        }
    },
    logs_channelDelete_description: (channel) => {
        switch (channel.type) {
            case "GUILD_TEXT":
                return `テキストチャネルが削除されました (${channel.name})`
            case "GUILD_VOICE":
            case "GUILD_STAGE_VOICE":
                return `音声チャンネルが削除されました (${channel.name})`
            case "GUILD_CATEGORY":
                return `カテゴリが削除されました (${channel.name})`
            default:
                return `チャンネルが削除されました (${channel.name})`
        }
    },
    logs_channelUpdate_description: (channel) => {
        switch (channel.type) {
            case "GUILD_TEXT":
                return `テキストチャネルが更新されました (${channel})`
            case "GUILD_VOICE":
            case "GUILD_STAGE_VOICE":
                return `音声チャンネルが更新されました (${channel})`
            case "GUILD_CATEGORY":
                return `カテゴリが更新されました (${channel.name})`
            default:
                return `チャンネルが更新されました (${channel.name})`
        }
    },
    overwrites_removed_for: "の権限が削除されました",
    added_overwrites_for: "追加された権限",
    logs_roleCreate_description: (role) => {
        return `新しい役割が作成されました (${role})`
    },
    logs_roleDelete_description: (role) => {
        return `役割が削除されました (${role.name})`
    },
    logs_roleUpdate_description: (role) => {
        return `役割が更新されました (${role})`
    },
    logs_messageDelete_description: (channel) => {
        return `${channel}のメッセージを削除しました (${channel.name})`
    },
    logs_message_sent_above: "長さのために埋め込み後に送信されたメッセージ",
    logs_message_bulk_description: (count) => {
        return `**${count}**メッセージが削除されて保存されました `
    },
    logs_message_update_description: (message) => {
        return `**${message.author.username}＃${message.author.discriminator}**は${message.channel}**${message.author.username}＃${message.author.discriminator}のメッセージを変更しました**${message.channel}のメッセージを変更しました`
    },
    logs_member_remove_description: (member) => {
        return ` **${member.user.username}＃${member.user.discriminator}**がサーバーを離れました`
    },
    logs_member_update_description: (member, author) => {
        return `ユーザー**${member.user.username}＃${member.user.discriminator}**が${author}によって更新されました`
    },
    logs_member_join_description: (member) => {
        return `${member}**がサーバーに参加しました`
    },
    logs_invite_used: (invite, user) => {

        if (!user) {
            user = "ユーザーわからない"
        } else {
            user = `${user.username}#${user.discriminator}`
        }

        return `${user}によって作成された招待${invite}を使用`
    },
    logs_invite_impossibile() {
        return "招待状が見つかりません。バニティURLが使用された可能性があります"
    },
    logs_member_kicked(member, author) {
        return `**${member.user.username}＃${member.user.discriminator}**が${author}によってキックされました`
    },
    logs_member_banned(user, author) {
        return `**${user.username}＃${user.discriminator}**は${author}によって禁止されています`
    },
    logs_member_unbanned(user, author) {
        return `**${user.username}＃${user.discriminator}**は${author}によって禁止が解除されました`
    },
    logs_guild_updated(author) {
        return `**${author.user.username}＃${author.user.discriminator}**サーバーを更新しました`
    },
    logs_emoji_create(emoji, author) {
        return `**${author.user.username}＃${author.user.discriminator}**が絵文字を作成しました**${emoji.name} **`
    },
    logs_emoji_delete(emoji, author) {
        return `**${author.user.username}＃${author.user.discriminator}**絵文字を削除しました**${emoji.name} **`
    },
    logs_emoji_update(emoji, author) {
        return `**${author.user.username}＃${author.user.discriminator}**絵文字を更新しました**${emoji.name} **`
    },
    logs_voice_update(member, author) {
        return `**${member.user.username}＃${member.user.discriminator}**の音声状態が**${author.user.username}＃${author.user.discriminator}**によって更新されました`
    },
    logs_voice_join(member, channel) {
        return `**${member.user.username}＃${member.user.discriminator}**が音声チャネルに参加しました**${channel.name}**`
    },
    logs_voice_leave(member, channel) {
        return `**${member.user.username}＃${member.user.discriminator}**左音声チャネル**${channel.name}**`
    },
    logs_voice_switch(member, oldChannel, newChannel) {
        return `**${member.user.username}＃${member.user.discriminator}**音声チャネル**${oldChannel.name}**から音声チャネル**${newChannel.name}**に切り替えました`
    },
}