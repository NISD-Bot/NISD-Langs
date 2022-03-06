/*
    File della lingua del BOT NISD,
    @Authors: @Polliog#7772 | 𝓝𝓪𝓴𝓪𝓶𝓸𝓽𝓸 𝓢𝓱𝓲𝓰𝓮𝓽𝓸𝓴𝓲#0016
    @Translated by: @TeknoSenpai#0957 (https://github.com/TeknoSenpai)
 */

const lang = {
    lang: "fr", // Le language de lu file
    //MOTS GÉNÉRAUX DU BOT, TRADUIRE EN SUIVANT LES MAJUSCULES
    maintenance: "Entretien",
    message: "Message",
    messages: "Messages",
    examples: "Exemples",
    site: "Site Internet",
    support_discord: "Serveur d'assistance",
    aliases: "Alias",
    changes_saved: 'Paramètres mis à jour',
    cmd_done: "Commande terminée",
    author: "Auteur",
    reason: "Raison",
    reason_not_provided: "non fourni",
    user: "Utilisateur",
    users: "Utilisateurs",
    page: "Page",
    moderation: "Modération",
    settings: "Réglages",
    utility: "Utility",
    active: "Activée",
    not_active: "Désactivée",
    report: "Rapports",
    nothing: "Rien",
    action: "Action",
    limit: "Limite",
    time: "Temp",
    changes: "Changements",
    actions: "Actions",
    measure: "Mesure",
    actual_mode: "Mode actuel",
    mode: "Mode",
    Role: "Role",
    title: "Titre",
    position: "Position",
    channel: "Chaîne",
    type: "Tipo",
    allowed: "Permis",
    color: "Coleur",
    hoist: "Séparé",
    pexs: "Permis",
    content: "Contenu",
    integration: "Intégration",
    old: "Vieille",
    new: "Neuf",
    description: "Description",
    invite: "Invitation",
    previous_channel: "Chaîne précédente",
    not_allowed: "Interdit",
    embed_message: "Méssage Embed",
    external_message: "Message Externe",
    category: "Catégorie",
    support_Role: "Role de soutien",
    joined_at: "Entré le",
    created_at: "Créé sur",
    server_deaf: "Sourd/e",
    server_mute: "Muet/tte",
    // Actions utiles pour le bot traduire par majuscule
    to_add: "être Ajouté",
    to_remove: "à Supprimer",
    //Réponses a l'interaction
    interaction_success: "Action compiuta",
    //BOT ERRORS traduisez comme bon vous semble
    bot_error: "Une erreur interne s'est produite, l'erreur sera automatiquement envoyée aux développeurs",
    error: "Erreur",
    insufficient_permissions: "Permissions insuffisantes",
    invalid_user: "Utilisateur invalide!",
    invalid_member: "Membre invalide!",
    invalid_Role: "Role invalide!",
    invalid_channel: "Canal non valide!",
    invalid_permission: "Le bot n'a pas la permission:",
    no_basic_permissions: "Le bot n'a pas les autorisations de base, telles que l'envoi de liens intégrés et l'envoi de messages",
    no_user_permission: "Vous devez être autorisé à utiliser la commande:",
    owner_restriction: "Seul le propriétaire du serveur peut exécuter cette commande",
    owner_restriction_plus: "Seul le propriétaire du serveur ou toute personne ayant un Role de `gestionnaire` peut exécuter cette commande",
    command_not_found: "Commande non trouvée",
    user_not_found: "Utilisateur non trouvé",
    /*
        time_left: timestamp en format unix
        cmd: lu command de lu bot
     */
    cmd_cooldown: (time_left, cmd) => {
        return `Vous pourrez réutiliser la commande entre: \`${cmd}\` <t:${time_left}:R>` // utilizzare <t:> per il Temp (discord timestamp)
    },
    already_banned: "L'utilisateur est déjà banni",
    actual_channel: "Chaîne Actuelle",
    not_banned: "L'utilisateur n'est pas banni",
    cant_ban: "Je ne peux pas bannir cet utilisateur",
    cant_kick: "Je ne peux pas bannir cet utilisateur",
    user_rank_equal: "L'utilisateur sélectionné est d'un degré supérieur ou égal au vôtre",
    invalid_mute_Role: "Le Role `mute` sélectionné est invalide ou n'existe pas, veuillez le réinitialiser via `setmuterole [@Role/ID]`",
    member_not_manageable: "Le bot ne peut effectuer aucune action sur cet utilisateur",
    warn_not_exists: "Avertissement inexistant",
    no_warns: "L'utilisateur n'a pas d'avertissement",
    bad_syntax: "Composition de commande incorrecte, vérifiez que vous avez correctement utilisé les guillemets, etc.",
    message_too_long: "Le contenu dépasse 256 caractères",
    maximum_ticket_panels_reached: "Vous avez atteint la limite de panneaux disponibles",
    tickets_channel_error_user: "Le ticket ne peut pas être créé actuellement",
    tickets_channel_error_logs: "Un ticket n'a pas pu être ouvert en raison d'autorisations insuffisantes",
    tickets_channel_closed_logs: "Une erreur s'est produite lors de la fermeture du ticket",
    /*
        time: timestamp en format unix
     */
    ticketsInt_rateLimit: (time) => `Vous pourrez réutiliser la commande entre: \<t:${time}:R\>`,
    ticketsInt_alreadyClosed: "Le ticket est déjà fermé.",
    ticketsInt_transcriptAlreadySent: "La transcription du billet a déjà été demandée précédemment.",
    //HELP (comand)
    not_in_dm: "Non disponible dans DMS",
    i_cant_write_you: "Je ne peux pas vous écrire dans le DMS, les ouvrir ou ajouter `-h` à la fin de la commande.",
    help_sent: "Je t'ai envoyé la liste dans le DMS",
    help_title: "Commandes NISD",
    help_description: "Pour vérifier une section ou une commande spécifique, utilisez `help [Section/Command]`.\n" +
        "Si vous souhaitez que cette commande s'affiche dans le chat plutôt que dans DMS, ajoutez `-h` à la fin de la commande. Donc `help -h` ou` help moderation -h`",
    arguments_legend: "**Légende des paramètres**:\n" +
        "`[]` - Cela signifie que le paramètre est obligatoire.\n" +
        "`()` - Cela signifie que le paramètre est facultatif.\n" +
        "`{}` - Argument conditionnel, Il n'est requis que dans certains cas.\n" +
        "`1 | 2 | 3` - Choisissez parmi ces options.\n" +
        "`[@ User/ID]` Le paramètre peut être à la fois la balise et l'identifiant d'un utilisateur\n" +
        "**N'ajoutez pas non plus les symboles {}, [], () et les emojis à la commande**",
    cmd_utilize: "Utilisation de la commande",
    not_configured: "`Pas configuré`",
    actual_Role: "Role actuel",
    time_format: "Formatage de l'heure",
    moderation_description: "*Protégez votre serveur et vérifiez ce qui se passe*",
    automoderation_description: "*Gardez le serveur sécurisé automatiquement*",
    automation_description: "*Automatisez les fonctions du bot*",
    settings_description: "*Configurer NISD via des commandes*",
    utility_description: "*Commandes utiles que je ne sais pas classer*",
    info_description: "*Obtenez des informations sur le bot, les utilisateurs, les serveurs, etc.*",
    //HEURE,
    year: "An",
    years: "Ans",
    month: "Moi",
    months: "Mois",
    day: "Jour",
    days: "Jours",
    hour: "Heure",
    hours: "Heures",
    minute: "Minute",
    minutes: "Minutes",
    second: "Seconde",
    seconds: "Secondes",
    duration: "Durée",
    //AVATAR
    avatar_use: "avatar (@User/ID)",
    avatar_description: "Affiche l'avatar de l'utilisateur ou du bot sélectionné",
    avatar_small_desc: "Affiche l'avatar de l'utilisateur ou du bot sélectionné",
    avatar_examples: "`avatar @Polliog`\n `avatar ID`",
    required_by: (user) => {
        return `Requis par ${user.username}#${user.discriminator}`
    },
    avatar_of: (user) => {
        return `Avatar de ${user.username}#${user.discriminator}`
    },
    //USERINFO
    userinfo_use: "user (@User/ID)",
    userinfo_description: "Afficher les informations d'un utilisateur",
    userinfo_small_desc: "Afficher les informations d'un utilisateur",
    userinfo_examples: "`user ID`\n`user @Polliog`",
    info_of: (member) => {
        return `Info de ${member.user.username} | ${member.user.id}`
    },
    name: "Nom",
    mention: "Mention",
    status: "L\'état",
    created: "Compte Créé",
    entered: "Entré sur le serveur",
    yes: "Oui",
    no: "Non",
    Roles: "Rôle",
    no_Role: "Aucun rôle",
    //SERVERINFO
    icon: "Icône",
    region: "Région",
    categories: "Catégories",
    text_channels: "Canaux de texte",
    voice_channels: "Canaux vocaux",
    members: "Membres",
    channels: "Chaînes",
    server_use: "server",
    server_description: "Afficher les informations du serveur",
    server_small_desc: "Afficher les informations du serveur",
    //SAY
    say_use: "say [Message]",
    say_description: "Demander au bot de répéter un message",
    say_examples: "`say salut tout le monde!`",
    //BUG
    bug_sent: "Rapport de bogue envoyé!",
    bug_use: "bug [Message]",
    bug_description: "Signaler une erreur à notre équipe d'assistance (minimum 50 caractères)\n" +
        "Incluez autant de détails que possible dans votre rapport.\n\n" +
        ":warning: **Attention** tout abus de la commande entraînera des conséquences !",
    bug_small_desc: 'Veuillez signaler une erreur à notre équipe d\'assistance',
    bug_examples: "`bug La commande warn me donne cette erreur ...`",
    bug_min_chars: "Le message doit comporter au moins 50 caractères.",
    //INVITE
    invite_content: "Merci de votre intérêt pour le bot",
    invite_me: "Invite moi",
    //MANAGER
    manager_use: "manager [@Rôle/ID/None]",
    manager_description: "Définissez un rôle qui peut modifier les paramètres réservés uniquement au propriétaire du serveur, utilisez \`none\` pour supprimer le rôle.\n" +
        "Le rôle de `manager` est également automatiquement contourné par l'AntiNuke" +
        "\n\n :warning: **Utilisez la commande avec prudence, le personnel du BOT n'est pas responsable des dommages causés au serveur**",
    manager_small_desc: "Définissez un rôle qui peut modifier les paramètres réservés uniquement au propriétaire",
    manager_examples: "`manager @⚡ | Amministratore `\n" +
        "`manager 589443292673081385`\n" +
        "`manager none`",
    manager_saved: (Role) => {
        return `\`Gestionnaire \` jeu de rôles. **Nouveau rôle**: ${Role}`
    },
    manager_removed: "Éliminer le rôle \`Manager \`",
    //CLEAR
    clear_use: "clear [Nombre]",
    clear_description: "Supprimer un certain nombre de messages dans un canal. **[Max. 1000]**",
    clear_small_desc: "Supprimer un certain nombre de messages dans un canal",
    clear_examples: "`clear 1000`",
    max_messages: "Vous pouvez supprimer jusqu'à 100 messages à la fois",
    clear_done: (number) => {
        return `<a:accettato_gif:742023278071119913> Supprimé \`${nombre}\` messages`
    },
    //BAN
    ban_use: "ban [@User/ID] (temp) (raison) (-c)",
    ban_description: "Bannissez un utilisateur du serveur de manière permanente ou pour une durée spécifique, ajoutez `-c` à la commande pour supprimer également les messages de l'utilisateur" +
        " envoyé au cours des 7 derniers jours. Si vous souhaitez interdire Temprairement un utilisateur, formatez l'heure en `3h 16m 8s` pendant 3 heures, 16 minutes et 8 secondes" +
        "\nLa commande fonctionne également pour les utilisateurs non présents sur le serveur",
    ban_small_desc: "Bannir un utilisateur du serveur, temps facultatif",
    ban_examples: "`ban @User`\n" +
        "`ban ID flood -c`\n" +
        "`ban @User 1d est ennuyeux`\n",
    user_banned: "Utilisateur banni",
    user_banned_dm: (guild) => {
        return `Vous avez été banni de ${guild.name}`
    },
    ban_timeout: "Ban scaduto",
    ban_timeout_dm: (guild) => {
        return `Votre interdiction de ${guild.name} a expiré, vous pouvez maintenant rejoindre le serveur`
    },
    //unban
    unban_use: "unban [@User/ID] (motif)",
    unban_small_desc: "Bannir un utilisateur du serveur",
    unban_description: "Bannir un utilisateur du serveur pour qu'il puisse se reconnecter",
    unban_examples: "`unban @User`" +
        "\n`unban ID oups mauvaise personne :(",
    user_unbanned: "Utilisateur un-banni",
    user_unbanned_dm: (guild) => {
        return `Vous avez été débanni de ${guild.name}`
    },
    //kick
    kick_use: "kick [@User/ID] (motif) (-c)",
    kick_description: "Kick un utilisateur du serveur, ajoutez `-c` pour supprimer également les messages d'invitation de l'utilisateur au cours des 7 derniers jours",
    kick_small_desc: "Expulser un utilisateur du serveur",
    kick_examples: "`kick ID`" +
        "\n`kick @User -c`" +
        "\n`kick @utilisateur agace dans la voyelle`" +
        "\n`kick @utilisateur spam dans le chat principal -c`",
    user_kicked: "Utilisateur expulsé",
    user_kicked_dm: (guild) => {
        return `Vous avez été banni de ${guild.name}`
    },
    //mute
    mute_use: "mute [@User/ID] (temp) (motif)",
    mute_description: "Coupez le son d'un utilisateur pour qu'il ne puisse plus parler. " +
        "Si vous souhaitez modifier Temprairement un utilisateur, formatez l'heure en `3h 16m 8s` pendant 3 heures, 16 minutes et 8 secondes. " +
        "L'utilisateur restera modifié même s'il quitte et revient sur le serveur.\n" +
        "**Veuillez noter qu'avec les serveurs avec un rôle par défaut personnalisé, la commande peut ne pas fonctionner en raison d'autorisations prioritaires**",
    mute_small_desc: "Désactiver un utilisateur, durée facultative",
    mute_examples: "`mute ID`\n" +
        "`mute @User`\n" +
        "`mute @User 15m pas de spamming!`\n" +
        "`mute @User agace continuellement dans la voyelle`",
    user_muted: "Utilisateur changé",
    user_muted_dm: (guild) => {
        return `Vous avez été muté le ${guild.name}`
    },
    mute_timeout: "Muet expiré",
    mute_timeout_dm: (guild) => {
        return `Vous n'avez plus changé sur ${guild.name}, vous pouvez recommencer à parler sur le serveur`
    },
    //unmute
    unmute_use: "unmute [@User/ID] (motif)",
    unmute_description: "Couper le son d'un utilisateur pour qu'il puisse à nouveau parler au serveur",
    unmute_small_desc: "Smut un utilisateur sur le serveur",
    unmute_examples: "`unmute ID`\n" +
        "`unmute @User`\n" +
        "`unmute @User mauvaise personne, désolé <3`",
    user_unmuted: "Utilisateur balbutié",
    user_unmuted_dm: (guild) => {
        return `T'as été smutée sur ${guild.name}`
    },
    //muteRole
    muteRole_use: "muteRole [@Rôle/ID] (-n)",
    muteRole_description: "Définit le rôle à utiliser pour la commande `mute`" +
        "\n\n **:warning: En utilisant la commande, le bot essaiera de définir le rôle dans tous les canaux présents sur le serveur, pour éviter cela, ajoutez `-n` à la commande**",
    muteRole_small_desc: "Définit le rôle à utiliser pour la commande `mute`",
    muteRole_examples: "`muteRole ID`\n" +
        "`muteRole @Rôle`\n" +
        "`muteRole @Rôle -n`",
    muteRole_saved: (Role) => {
        return `Rôle \`muet\` set. **Nouveau rôle**: ${Role}`
    },
    //warn
    warn_use: "warn [@User/ID] (motif)",
    warn_description: "Notifier un utilisateur",
    warn_small_desc: "Notifier un utilisateur",
    warn_examples: "`warn ID`\n" +
        "`warn @utilisateur smettila di spammare`",
    user_warned: "Utilisateur averti",
    user_warned_dm: (guild) => {
        return `Vous avez été averti pour ${guild.name}`
    },
    //unwarn
    unwarn_use: "unwarn [@utilisateur/ID] [Nombre] (motif)",
    unwarn_description: "Supprimer un avertissement d'un utilisateur, pour trouver le nom d'un avertissement, utilisez `warnings [@utilisateur]`",
    unwarn_small_desc: "Supprimer un avertissement à un utilisateur",
    unwarn_examples: "`unwarn ID`\n" +
        "`unwarn @utilisateur`\n" +
        "`unwarn @utilisateur ti perdono bro`",
    user_unwarned: "Warn eliminato",
    user_unwarned_dm: (guild) => {
        return `Warn éliminé sur ${guild.name}`
    },
    //clearwarn
    clearwarns_use: "clearwarns [@utilisateur/ID] (motif)",
    clearwarns_description: "Supprimer tous les avertissements donnés à un utilisateur",
    clearwarns_small_desc: "Il efface tous les avis d'un utilisateur",
    clearwarns_examples: "`clearwarns ID`\n" +
        "`clearwarns @utilisateur`\n" +
        "`clearwarns @utilisateur hai preso il perdono`",
    user_clearwarns: "Avertit totalement éliminé",
    user_clearwarns_dm: (guild) => {
        return `Warn totalement éliminé sur ${guild.name}`
    },
    //warnings
    warnings_use: "warnings [@utilisateur/ID] (pagina)",
    warnings_description: "Consulter les avis d'un utilisateur en particulier",
    warnings_small_desc: "Consulter les avis d'un utilisateur en particulier",
    warnings_examples: "`warnings ID`\n" +
        "`warnings ID 2`\n" +
        "`warnings @Polliog`\n" +
        "`warnings @Polliog 2`",
    warns_of: (user) => {
        return `Avertissements de ${user.username}#${user.discriminator}`
    },
    //reportchannel
    reportchannel_use: "reportchannel [#Canal/ID]",
    reportchannel_description: "Configurer un canal pour les rapports d'utilisateurs",
    reportchannel_small_desc: "Configurer un canal pour les rapports d'utilisateurs",
    reportchannel_examples: "`reportchannel ID`\n" +
        "`reportchannel #Canal`",
    reportchannel_saved: (channel) => {
        return `Canal de message défini, **Nouveau canal**: ${channel}`
    },
    //prefix
    my_prefix: (prefix) => {
        return `Mon préfixe sur ce serveur est \`${prefix}\``
    },
    prefix_use: "prefix [Prefix]",
    prefix_description: "Définissez un préfixe personnalisé sur le serveur, le bot répondra au nouveau préfixe et au préfixe `nisd`. \n" +
        "**Vous pourrez également taguer le bot pour voir le préfixe sur ce serveur**",
    prefix_small_desc: "Changer le préfixe du bot",
    prefix_examples: "`prefix ?`\n" +
        "`prefix n!!`",
    prefix_changed: (prefix) => {
        return `Préfixe du bot changé, **Nouveau préfixe**: \`${prefix}\``
    },
    //mod
    mod_logs: "Modération des journaux",
    mod_deleteAfter: "Supprimer la commande",
    mod_dmUser: "Message de l'utilisateur",
    mod_use: "mod logs | dms | delete {#Canal/ID/none} {True/False}",
    mod_description: "**Mmodifier les paramètres de modération**\n" +
        ":small_blue_diamond: `mod logs [#Canal/ID/none]`\n" +
        "Configurer un canal pour montrer les actions entreprises par le personnel\n" +
        ":small_blue_diamond: `mod dms [True/False]`\n" +
        "Définir s'il faut ou non envoyer un message privé à l'utilisateur une fois l'action entreprise\n" +
        ":small_blue_diamond: `mod delete [True/False]`\n" +
        "Définit s'il faut supprimer automatiquement la commande une fois l'action effectuée",
    mod_small_desc: "Ouvrez les paramètres de modération, utilisez `mod` pour plus d'informations",
    mod_examples: "`mod dms true` \n" +
        "`mod logs none`\n" +
        "`mod logs #Canal`\n" +
        "`mod delete true`",
    //modlogs
    mod_logs_use: "mod logs [#Canal/ID/none]",
    mod_logs_description: "Configurer un canal pour montrer les actions entreprises par le personnel\n" +
        "Utilisez `none` au lieu du canal pour désactiver les journaux",
    mod_logs_small_desc: "Configurer un canal pour montrer les actions entreprises par le personnel",
    mod_logs_examples: "`mod logs ID`\n" +
        "`mod logs none`\n" +
        "`mod logs #Canal`",
    mod_logs_channel_saved: (channel) => {
        return `Canal mis à jour pour les journaux de modération, **Nouveau canal**: ${channel}`
    },
    mod_logs_disabled: "Journaux de modération désactivés!",
    //mod dms
    mod_dms_use: "mod dms [True/False]",
    mod_dms_description: "Définir s'il faut ou non envoyer un message privé à l'utilisateur une fois l'action entreprise",
    mod_dms_small_desc: "Définir s'il faut ou non envoyer un message privé à l'utilisateur une fois l'action entreprise",
    mod_dms_examples: "`mod dms true`\n" +
        "`mod dms false`",
    mod_dms_true: "Les utilisateurs seront désormais informés dans le DMS",
    mod_dms_false: "Désormais, les utilisateurs ne recevront plus d'alertes dans DMS",
    //mod delete
    mod_delete_use: "mod delete [True/False]",
    mod_delete_description: "Définit s'il faut supprimer automatiquement la commande une fois l'action effectuée",
    mod_delete_small_desc: "Définit s'il faut supprimer automatiquement la commande une fois l'action effectuée",
    mod_delete_examples: "`mod delete true`\n" +
        "`mod delete false`",
    mod_delete_true: "Maintenant, les commandes seront supprimées lorsque l'action sera terminée",
    mod_delete_false: "Désormais, les commandes ne seront pas supprimées lorsque l'action sera terminée",
    //report
    report_use: "report [Message]",
    report_description: "Signaler quelque chose au personnel du serveur (minimum 10 caractères)",
    report_small_desc: "Signaler quelque chose au personnel du serveur",
    report_examples: "`report Polliog a offensé moi :(`",
    report_min_chars: "Le message doit comporter au moins 10 caractères.",
    report_not_configured: "Aucun canal de signalisation valide n'est configuré dans le serveur.",
    report_sent: "Rapport envoyé!",
    //poll
    poll_use: "poll \"[Titolo]\" \"[Opzione1]\" \"[Opzione2]\" \"(Choix)\"",
    poll_description: "Créer un sondage avec plusieurs choix, maximum 9 choix",
    poll_small_desc: "Créer un sondage avec plusieurs choix",
    poll_examples: '`poll "De meilleurs sushis ou pizza?" "pizza" "sushi"`\n',
    poll_max_options: "Vous pouvez utiliser jusqu'à 9 choix",
    //info
    info_bot: "À propos du robot",
    info_use: "info",
    info_cmd_description: "Afficher des informations sur le BOT",
    started: "Démarrer",
    version: "Version",
    //antiflood
    antiflood_use: "antiflood [enable/disable | limit | action | time] {Nombre} {Action}",
    antiflood_description: "L'AntiFlood permet de protéger le serveur contre les personnes qui tapent de nombreux messages de manière répétée\n\n" +
        ":small_blue_diamond: `antiflood [enable/disable]`\n" +
        "Activer ou désactiver AntiFlood\n" +
        ":small_blue_diamond: `antiflood limit [Limite]`\n" +
        "Définissez le nombre maximum de messages pouvant être envoyés dans le Temp donné\n" +
        ":small_blue_diamond: `antiflood action [Ban | Kick | Warn | Mute | none]`\n" +
        "Définir l'action que le bot effectue lorsqu'il détecte une inondation\n" +
        ":small_blue_diamond: `antiflood time [Temp]`\n" +
        "Réglez la température **en secondes**, dans laquelle l'inondation doit être déterminée",
    antiflood_small_desc: "Ouvrez les paramètres AntiFlood",
    antiflood_examples: "`antiflood enable`\n" +
        "`antiflood limit 4`\n" +
        "`antiflood action ban`\n" +
        "`antiflood time 5`",
    //antiflood enable/disable
    antiflood_mode_use: "antiflood [Enable | Disable]",
    antiflood_mode_description: "Activer ou désactiver AntiFlood",
    antiflood_mode_small_desc: "Activer ou désactiver AntiFlood",
    antiflood_mode_examples: "`antiflood enable`\n" +
        "`antiflood disable`",
    antiflood_enabled: "AntiFlood activé!",
    antiflood_disabled: "AntFlood désactivé!",
    //antiflood limit
    antiflood_limit_use: "antiflood limit [Limite]",
    antiflood_limit_description: "Définissez le nombre maximum de messages pouvant être envoyés dans le Temp donné\n" +
        "**Plus vous augmentez la limite, plus vous devez envoyer de messages pour l'activer**",
    antiflood_limit_small_desc: "Définissez le nombre maximum de messages pouvant être envoyés dans le Temp donné",
    antiflood_limit_examples: "`antiflood limit 5`",
    antiflood_limit_min: "La limite minimale pour AntiFlood est de 3 messages",
    antiflood_limit_updated: (limit) => {
        return `Limite AntiFlood modifiée, **nouvelle limite**: \`${limit}\``
    },
    //antiflood action
    antiflood_action_use: "antiflood action [Ban | Kick | Warn | Mute | none]",
    antiflood_action_description: "Définissez l'action que le bot effectue lorsqu'il détecte une inondation, utilisez `none` pour ne faire aucune action (autre que la suppression de messages)",
    antiflood_action_small_desc: "Définir l'action que le bot effectue lorsqu'il détecte une inondation",
    antiflood_action_examples: "`antiflood action ban`\n" +
        "`antiflood action none`",
    antiflood_action_updated: (action) => {
        return `Action dell'AntiFlood aggiornata, **Action**: \`${action}\``
    },
    //antiflood time
    antiflood_time_use: "antiflood time [Secondi]",
    antiflood_time_description: "Réglez la température **en secondes**, dans laquelle l'inondation doit être déterminée",
    antiflood_time_small_desc: "Réglez la température dans laquelle l'inondation doit être déterminée",
    antiflood_time_examples: "`antiflood time 4`",
    antiflood_time_min: "Le délai minimum pour l'AntiFlood est de 3 secondes",
    antiflood_time_updated: (time) => {
        return `Temp AntiFlood mise à jour, **Nouvelle Temp**: \`${time} Secondi\``
    },
    antiflood_in_action: (member) => {
        return `${member}**, Vous envoyez trop de SMS rapidement!**`
    },
    antiflood_acted: "[NISD AutoMod] L'utilisateur a envoyé trop de messages rapidement!",
    //antispam
    antispam_use: "antispam [enable/disable | action] {Action}",
    antispam_description: "AntiSpam est une fonction qui supprime automatiquement tous les spams (invitations du serveur) sur le serveur\n\n" +
        ":small_blue_diamond: `antispam [enable/disable]`\n" +
        "Activer ou désactiver AntiSpam\n" +
        ":small_blue_diamond: `antispam action [Ban | Kick | Warn | Mute | none]`\n" +
        "Définissez l'action que le bot entreprend lorsqu'il détecte un lien de spam",
    antispam_small_desc: "Ouvrez les paramètres AntiSpam",
    antispam_examples: "`antispam enable`\n" +
        "`antispam action warn`",
    antispam_in_action: (member) => {
        return `${member}**, Lien d'invitation détecté!**`
    },
    antispam_acted: "[NISD AutoMod] Lien d'invitation détecté!",
    //antispam action
    antispam_action_use: "antispam action [Ban | Kick | Warn | Mute | none]",
    antispam_action_description: "Définissez l'action que le bot entreprend lorsqu'il détecte un message de spam, " +
        "utilisez `none` pour n'entreprendre aucune action (autre que la suppression du message)",
    antispam_action_small_desc: "Définissez l'action que le bot entreprend s'il détecte du spam",
    antispam_action_examples: "`antispam action ban`\n" +
        "`antispam action none`",
    antispam_action_updated: (action) => {
        return `Action AntiSpam mise à jour, **Action**: \`${action}\``
    },
    //antispam enable/disable
    antispam_enabled: "Antispam activé!",
    antispam_disabled: "Antispam désactivé!",
    //antinuke
    antinuke_use: "antinuke [Categoria] [limit | action | enable/disable] {Choix}",
    antinuke_description: "Pour afficher les paramètres actuels, utilisez \`antinuke info\`\n\n" +
        "Modifiez les paramètres de l'AntiNuke, pour modifier un paramètre spécifique, utilisez `antinuke [categoria]`\n" +
        "Si un utilisateur atteint la \`limite\` d'une action, le bot le punit, chaque action a sa propre punition\n" +
        "Vous pouvez définir une limite \`globale\` via `antinuke global [Nombre]`\n\n" +
        ":small_blue_diamond: \`antinuke ban [limit | action | enable/disable] {Choix}\`\n" +
        "Changer le ban Nombre avant de déclencher l'AntiNuke du bot\n" +
        ":small_blue_diamond: \`antinuke kick [limit | action | enable/disable] {Choix}\`\n" +
        "Changer le Kick Nombre avant de déclencher l'AntiNuke du bot\n" +
        ":small_blue_diamond: \`antinuke Rolecreate [limit | action | enable/disable] {Choix}\`\n" +
        "Modifier le Nombre de rôles créés avant de déclencher l'AntiNuke du bot\n" +
        ":small_blue_diamond: \`antinuke Roledel [limit | action | enable/disable] {Choix}\`\n" +
        "Modifier le Nombre de rôles supprimés avant de déclencher l'AntiNuke du bot\n" +
        ":small_blue_diamond: \`antinuke channelcreate [limit | action | enable/disable] {Choix}\`\n" +
        "Modifier le Nombre de canaux créés avant de déclencher l'AntiNuke du bot\n" +
        ":small_blue_diamond: \`antinuke channeldel [limit | action | enable/disable] {Choix}\`\n" +
        "Modifier le nombre de chaînes supprimées avant de déclencher l'AntiNuke du bot\n" +
        ":small_blue_diamond: \`antinuke global [Nombre]\`\n" +
        "Définir une nouvelle limite globale\n" +
        ":small_blue_diamond: \`antinuke info\`\n" +
        "Vérifiez les paramètres AntiNuke actuels",
    antinuke_small_desc: "Afficher tous les paramètres AntiNuke",
    antinuke_examples: "`antinuke info`\n" +
        "`antinuke global 5`\n" +
        "`antinuke ban enable`\n" +
        "`antinuke kick action ban`\n" +
        "`antinuke Rolecreate limit 4`",
    antinuke_warnings: "[ANTINUKE] Attention vous dépassez une limite de l'AntiNuke",
    //antiban
    antiban_use: "antiban [limit | action | enable/disable] {Choix}",
    antiban_description: "AntiBan est une fonctionnalité d'AntiNuke qui agit sur les utilisateurs qui bannissent de nombreux membres à plusieurs reprises\n\n" +
        ":small_blue_diamond: \`antiban enable/disable\`\n" +
        "Activer/Désactiver l'AntiBan\n" +
        ":small_blue_diamond: \`antiban limit [Nombre]\`\n" +
        "Modifier le nombre de bans nécessaires pour activer l'AntiBan\n" +
        ":small_blue_diamond: \`antiban action [Sanction]\`\n" +
        "Modifier la sanction AntiBan",
    antiban_small_desc: "Modifier les paramètres AntiNuke AntiBan",
    antiban_examples: "`antiban enable`\n" +
        "`antiban disable`\n" +
        "`antiban limit 5`\n" +
        "`antiban action ban`",
    antiban_enabled: "AntiBan activé!",
    antiban_disabled: "AntiBan désactivé!",
    antiban_acted: "[ANTIBAN] Rilevato un grosso Nombre di ban eseguiti dall'utilisateur",
    //antiban action
    antiban_action_use: "antiban action [Ban | Kick | Warn | Mute]",
    antiban_action_description: "Définit l'action que le BOT doit effectuer si un utilisateur dépasse la limite définie",
    antiban_action_examples: "`antiban action ban`",
    antiban_action_updated: (action) => {
        return `Action AntiBan mise à jour, **Action**: \`${action}\``
    },
    //antiban limit
    antiban_limit_use: "antiban limit [Nombre]",
    antiban_limit_description: "Fixez la limite pour l'AntiBan d'AntiNuke",
    antiban_limit_examples: "`antiban limit 3`",
    antiban_limit_updated: (limit) => {
        return `Limite AntiBan modifiée, **Nouvelle limite**: \`${limit}\``
    },
    //antikick
    antikick_use: "antikick [limit | action | enable/disable] {Choix}",
    antikick_description: "AntiKick est une fonctionnalité d'AntiNuke qui agit sur les utilisateurs qui bannissent de nombreux membres à plusieurs reprises\n\n" +
        ":small_blue_diamond: \`antikick enable/disable\`\n" +
        "Activer/désactiver l'anti-coup de pied\n" +
        ":small_blue_diamond: \`antikick limit [Nombre]\`\n" +
        "Modifiez le nombre de coups de pied nécessaires pour activer l'AntiKick\n" +
        ":small_blue_diamond: \`antikick action [Sanction]\`\n" +
        "Modifier la sanction AntiKick",
    antikick_small_desc: "Modifier les paramètres AntiNuke AntiKick",
    antikick_examples: "`antikick enable`\n" +
        "`antikick disable`\n" +
        "`antikick limit 5`\n" +
        "`antikick action ban`",
    antikick_enabled: "AntiKick activé!",
    antikick_disabled: "AntiKick désactivé!",
    antikick_acted: "[ANTIKICK] Un grand nombre de kicks effectués par l'utilisateur a été détecté",
    //antikick action
    antikick_action_use: "antikick action [Ban | Kick | Warn | Mute]",
    antikick_action_description: "Définit l'action que le BOT doit effectuer si un utilisateur dépasse la limite définie",
    antikick_action_examples: "`antikick action ban`",
    antikick_action_updated: (action) => {
        return `Action AntiKick mise à jour, **Action**: \`${action}\``
    },
    //antikick limit
    antikick_limit_use: "antikick limit [Nombre]",
    antikick_limit_description: "Définissez la limite pour l'AntiKick d'AntiNuke",
    antikick_limit_examples: "`antikick limit 3`",
    antikick_limit_updated: (limit) => {
        return `Limite AntiKick modifiée, **nouvelle limite**: \`${limit}\``
    },
    //antiRolecreate
    antiRolecreate_use: "antiRolecreate [limit | action | enable/disable] {Choix}",
    antiRolecreate_description: "AntiRoleCreate est une fonction d'AntiNuke qui agit sur les utilisateurs qui créent de nombreux rôles en peu de temps\n\n" +
        ":small_blue_diamond: \`antiRolecreate enable/disable\`\n" +
        "Activer/Désactiver AntiRoleCreate\n" +
        ":small_blue_diamond: \`antiRolecreate limit [Nombre]\`\n" +
        "Modifier le Nombre de rôles créés nécessaire pour activer l'AntiRoleCreate\n" +
        ":small_blue_diamond: \`antiRolecreate action [Sanction]\`\n" +
        "Modifier la sanction AntiRoleCreate",
    antiRolecreate_small_desc: "Modifier les paramètres AntiRoleCreate de l'AntiNuke",
    antiRolecreate_examples: "`antiRolecreate enable`\n" +
        "`antiRolecreate disable`\n" +
        "`antiRolecreate limit 5`\n" +
        "`antiRolecreate action ban`",
    antiRolecreate_enabled: "AntiRoleCreate activé!",
    antiRolecreate_disabled: "AntiRoleCreate désactivé!",
    antiRolecreate_acted: "[ANTIRoleCREATE] Un grand nombre de rôles créés par l'utilisateur a été détecté",
    //antiRolecreate action
    antiRolecreate_action_use: "antiRolecreate action [Ban | Kick | Warn | Mute]",
    antiRolecreate_action_description: "Définit l'action que le BOT doit effectuer si un utilisateur dépasse la limite définie",
    antiRolecreate_action_examples: "`antiRolecreate action ban`",
    antiRolecreate_action_updated: (action) => {
        return `Action AntiRoleCreate mise à jour, **Action**: \`${action}\``
    },
    //antiRolecreate limit
    antiRolecreate_limit_use: "antiRolecreate limit [Nombre]",
    antiRolecreate_limit_description: "Définir la limite pour l'AntiRoleCreate de l'AntiNuke",
    antiRolecreate_limit_examples: "`antiRolecreate limit 3`",
    antiRolecreate_limit_updated: (limit) => {
        return `Limite AntiRoleCreate modifiée, **nouvelle limite**: \`${limit}\``
    },
    //antiRoledelete
    antiRoledelete_use: "antiRoledelete [limit | action | enable/disable] {Choix}",
    antiRoledelete_description: "AntiRoleDelete est une fonction d'AntiNuke qui agit sur les utilisateurs qui suppriment de nombreux rôles en peu de temps\n\n" +
        ":small_blue_diamond: \`antiRoledelete enable/disable\`\n" +
        "Activer/Désactiver AntiRoleDelete\n" +
        ":small_blue_diamond: \`antiRoledelete limit [Nombre]\`\n" +
        "Modifier le nombre de rôles supprimés nécessaires pour activer AntiRoleDelete\n" +
        ":small_blue_diamond: \`antiRoledelete action [Sanction]\`\n" +
        "Modifier la sanction AntiRoleDelete",
    antiRoledelete_small_desc: "Modifier les paramètres AntiRoleDelete de l'AntiNuke",
    antiRoledelete_examples: "`antiRoledelete enable`\n" +
        "`antiRoledelete disable`\n" +
        "`antiRoledelete limit 5`\n" +
        "`antiRoledelete action ban`",
    antiRoledelete_enabled: "AntiRoleDelete activé!",
    antiRoledelete_disabled: "AntiRoleDelete désactivé!",
    antiRoledelete_acted: "[ANTIRoleDELETE] Un grand nombre de rôles utilisateur supprimés détectés",
    //antiRoledelete action
    antiRoledelete_action_use: "antiRoledelete action [Ban | Kick | Warn | Mute]",
    antiRoledelete_action_description: "Définit l'action que le bot doit effectuer au cas où un utilisateur dépasserait la limite définie",
    antiRoledelete_action_examples: "`antiRoledelete action ban`",
    antiRoledelete_action_updated: (action) => {
        return `Action de l'AntiRoleDelete mise à jour, **Action**: \`${action}\``
    },
    //antiRoledelete limit
    antiRoledelete_limit_use: "antiRoledelete limit [Nombre]",
    antiRoledelete_limit_description: "Définir la limite pour l'AntiRoleDelete de l'AntiNuke",
    antiRoledelete_limit_examples: "`antiRoledelete limit 3`",
    antiRoledelete_limit_updated: (limit) => {
        return `Limite AntiRoleDelete modifiée, **nouvelle limite**: \`${limit}\``
    },
    //antichannelcreate
    antichannelcreate_use: "antichannelcreate [limit | action | enable/disable] {Choix}",
    antichannelcreate_description: "AntiChannelCreate est une fonction d'AntiNuke qui agit sur les utilisateurs qui créent de nombreux canaux en peu de temps\n\n" +
        ":small_blue_diamond: \`antichannelcreate enable/disable\`\n" +
        "Activer / Désactiver AntiChannelCreate\n" +
        ":small_blue_diamond: \`antichannelcreate limit [Nombre]\`\n" +
        "Modifier le nombre de canaux créés nécessaires pour activer AntiChannelCreate\n" +
        ":small_blue_diamond: \`antichannelcreate action [Sanction]\`\n" +
        "Modifier la sanction AntiChannelCreate",
    antichannelcreate_small_desc: "Modifier les paramètres AntiChannelCreate de l'AntiNuke",
    antichannelcreate_examples: "`antichannelcreate enable`\n" +
        "`antichannelcreate disable`\n" +
        "`antichannelcreate limit 5`\n" +
        "`antichannelcreate action ban`",
    antichannelcreate_enabled: "AntiChannelCreate activé!",
    antichannelcreate_disabled: "AntiChannelCreate désactivé!",
    antichannelcreate_acted: "[ANTICHANNELCREATE] Un grand nombre de chaînes créées par l'utilisateur détectées",
    //antichannelcreate action
    antichannelcreate_action_use: "antichannelcreate action [Ban | Kick | Warn | Mute]",
    antichannelcreate_action_description: "Définit l'action que le bot doit effectuer au cas où un utilisateur dépasserait la limite définie",
    antichannelcreate_action_examples: "`antichannelcreate action ban`",
    antichannelcreate_action_updated: (action) => {
        return `Action AntiChannelCreate mise à jour, **Action**: \`${action}\``
    },
    //antichannelcreate limit
    antichannelcreate_limit_use: "antichannelcreate limit [Nombre]",
    antichannelcreate_limit_description: "Définir la limite pour l'AntiChannelCreate de l'AntiNuke",
    antichannelcreate_limit_examples: "`antichannelcreate limit 3`",
    antichannelcreate_limit_updated: (limit) => {
        return `Limite AntiChannelCreate modifiée, **Nouvelle limite**: \`${limit}\``
    },
    //antichanneldelete
    antichanneldelete_use: "antichanneldelete [limit | action | enable/disable] {Choix}",
    antichanneldelete_description: "AntiChannelDelete est une fonction d'AntiNuke qui agit sur les utilisateurs qui suppriment de nombreux canaux en peu de temps\n\n" +
        ":small_blue_diamond: \`antichanneldelete enable/disable\`\n" +
        "Activer/Désactiver AntiChannelDelete\n" +
        ":small_blue_diamond: \`antichanneldelete limit [Nombre]\`\n" +
        "Modifier le nombre de chaînes supprimées nécessaires pour activer AntiChannelDelete\n" +
        ":small_blue_diamond: \`antichanneldelete action [Sanction]\`\n" +
        "Modifier la sanction AntiChannelDelete",
    antichanneldelete_small_desc: "Modifier les paramètres AntiChannelDelete de l'AntiNuke",
    antichanneldelete_examples: "`antichanneldelete enable`\n" +
        "`antichanneldelete disable`\n" +
        "`antichanneldelete limit 5`\n" +
        "`antichanneldelete action ban`",
    antichanneldelete_enabled: "AntiChannelDelete activé!",
    antichanneldelete_disabled: "AntiChannelDelete désactivé!",
    antichanneldelete_acted: "[ANTICHANNELDELETE] Un grand nombre de chaînes supprimées par l'utilisateur détectées",
    //antichanneldelete action
    antichanneldelete_action_use: "antichanneldelete action [Ban | Kick | Warn | Mute]",
    antichanneldelete_action_description: "Définit l'action que le bot doit effectuer au cas où un utilisateur dépasserait la limite définie",
    antichanneldelete_action_examples: "`antichanneldelete action ban`",
    antichanneldelete_action_updated: (action) => {
        return `Action AntiChannelDelete mise à jour, **Action**: \`${action}\``
    },
    //antichanneldelete limit
    antichanneldelete_limit_use: "antichanneldelete limit [Nombre]",
    antichanneldelete_limit_description: "Définir la limite pour l'AntiChannelDelete de l'AntiNuke",
    antichanneldelete_limit_examples: "`antichanneldelete limit 3`",
    antichanneldelete_limit_updated: (limit) => {
        return `Limite AntiChannelDelete modifiée, **Nouvelle limite**: \`${limit}\``
    },
    //antinuke global
    antinukeglobal_use: "antinuke global [Nombre]",
    antinukeglobal_description: "**Définir la limite globale de l'AntiNuke**\n" +
        "La limite globale est la somme de toutes les actions commises par l'utilisateur et enregistrées par l'AntiNuke du BOT dans les ± 30 dernières secondes.\n" +
        "**Le BOT ne comptera que les actions des fonctions activées, pour voir quelles fonctions de l'AntiNuke sont activées, utilisez `antinuke info`**",
    antinukeglobal_small_desc: "Définir la limite globale de l'AntiNuke",
    antinukeglobal_examples: "`antinuke global 10`",
    antinukeglobal_updated: (limit) => {
        return `La limite globale AntiNuke a été modifiée, **Nouvelle limite**: \`${limit}\``
    },
    antinukeglobal_warnings: "[ANTINUKE] Attenzione stai superando il limite globale dell'AntiNuke",
    //antinuke info
    antinuke_info_title: "Paramètres AntiNuke",
    antinuke_info_description: "Ce panneau affiche tous les paramètres AntiNuke actuels, " +
        "vous pouvez modifier les différents paramètres à l'aide de `antinuke [Section]` ou via des commandes simples `antiban {...}`",
    antinuke_info_global_title: "Limite globale",
    //antiraid
    antiraid_use: "antiraid [limit | action | enable/disable | time] {Choix}",
    antiraid_description: "L'AntiRaid vous permet de protéger le serveur de l'entrée de nombreux utilisateurs en peu de temps\n\n" +
        ":small_blue_diamond: \`antiraid enable/disable\`\n" +
        "Activer/Désactiver AntiRaid\n" +
        ":small_blue_diamond: \`antiraid limit [Nombre]\`\n" +
        "Modifier le nombre d'utilisateurs connectés dans un certain délai nécessaire pour activer l'AntiRaid\n" +
        ":small_blue_diamond: `antiraid time [Temp]`\n" +
        "Réglez le temps **en secondes**, dans lequel le raid doit être déterminé\n" +
        ":small_blue_diamond: \`antiraid action [Sanction]\`\n" +
        "Modifier la sanction AntiRaid",
    antiraid_small_desc: "Modifier les paramètres AntiRaid",
    antiraid_examples: "`antiraid enable`\n" +
        "`antiraid disable`\n" +
        "`antiraid time 6`\n" +
        "`antiraid limit 5`\n" +
        "`antiraid action ban`",
    antiraid_enabled: "AntiRaid activé!",
    antiraid_disabled: "AntiRaid désactivé!",
    antiraid_acted: "[ANTIRAID] Détecté un grand nombre d'utilisateurs connectés en même temps",
    //antiraid limit
    antiraid_limit_use: "antiraid limit [Limite]",
    antiraid_limit_description: "Définir le nombre maximum d'utilisateurs entrés dans le temps imparti\n" +
        "**Plus vous augmentez la limite, plus il y a d'utilisateurs connectés pour l'activer**",
    antiraid_limit_small_desc: "Définir le nombre maximum d'utilisateurs connectés dans le temps imparti",
    antiraid_limit_examples: "`antiraid limit 5`",
    antiraid_limit_min: "La limite minimale pour AntiRaid est de 3 utilisateurs",
    antiraid_limit_updated: (limit) => {
        return `Limite AntiRaid modifiée, **nouvelle limite**: \`${limit}\``
    },
    //antiraid action
    antiraid_action_use: "antiraid action [Ban | Kick | Warn | Mute]",
    antiraid_action_description: "Définissez l'action que le bot entreprend lorsqu'il détecte un raid",
    antiraid_action_small_desc: "Définissez l'action que le bot entreprend lorsqu'il détecte un raid",
    antiraid_action_examples: "`antiraid action ban`\n" +
        "`antiraid action none`",
    antiraid_action_updated: (action) => {
        return `Action AntiRaid mise à jour, **Action**: \`${action}\``
    },
    //antiraid time
    antiraid_time_use: "antiraid time [Secondi]",
    antiraid_time_description: "Réglez le temps **en secondes**, dans lequel le raid doit être déterminé",
    antiraid_time_small_desc: "Définir l'heure à laquelle le raid doit être déterminé",
    antiraid_time_examples: "`antiraid time 4`",
    antiraid_time_min: "Le délai minimum pour AntiRaid est de 3 secondes",
    antiraid_time_updated: (time) => {
        return `Heure AntiRaid mise à jour, **Nouvelle heure**: \`${time} Secondi\``
    },
    //autoaction
    autoaction_use: "autoaction [add | remove | list] {Choix}",
    autoaction_description: "Définir une action à effectuer lorsqu'un utilisateur atteint un certain nombre d'avertissements\n\n" +
        ":small_blue_diamond: `autoaction add [Nombre] [ban | kick | mute] {Temp}`\n" +
        "Ajoutez une action que le bot exécutera au nombre défini d'avertissements\n" +
        ":small_blue_diamond: `autoaction remove [Nombre]`\n" +
        "Supprimer une action autoAction\n" +
        ":small_blue_diamond: `autoaction list`\n" +
        "Affiche les actions que le bot effectuera à un certain nombre d'avertissements",
    autoaction_small_desc: "Changer les actions automatiques du bot en certains avertissements",
    autoaction_examples: "`autoaction list`\n" +
        "`autoaction remove 2`\n" +
        "`autoaction add 3 kick`\n" +
        "`autoaction add 5 ban 2d`",
    //autoaction add
    autoaction_add_use: "autoaction add [Nombre] [ban | kick | mute] {Temp}",
    autoaction_add_description: "**Actions disponibles**:\n" +
        "`ban (Temp)` = Bannir l'utilisateur du serveur, temps facultatif\n" +
        "`kick` = Expulser l'utilisateur du serveur\n" +
        "`mute (Temp)` = Utilisateur muet, durée facultative\n" +
        "**Remarque**: un rôle doit être sélectionné pour être muet via `setmuterole [Rôle]`",
    autoaction_add_examples: "`autoaction add 5 mute 12h`",
    autoaction_already_exists: (number) => {
        return `Il existe déjà une autre disposition définie pour \`${number}\` warns. Vérifier les autres mesures avec la commande \`autoaction list\``
    },
    autoaction_added: (number, action, time) => {
        let real_action


        switch (action) {
            case 'ban':
                real_action = 'banni'
                break
            case 'kick':
                real_action = 'exclu'
                break
            case 'mute':
                real_action = 'muet'
                break
            default:
                real_action = "?"
                break
        }

        let send = `Paramètres mis à jour, maintenant atteint \`${number}\` avertit, l'utilisateur sera ${real_action}`

        if (time !== null) {
            send = send + ' Temprairement'
        }

        return send
    },
    //autoaction remove
    autoaction_remove_use: "autoaction remove [Nombre]",
    autoaction_remove_description: "Supprimer une action automatique",
    autoaction_remove_examples: "`autoaction remove 3`",
    autoaction_dont_exists: (number) => {
        return `Il n'y a pas de provision définie pour \`${number}\` warns. Vérifier les mesures avec la commande \`autoaction list\``
    },
    autoaction_removed: "Mesure supprimée",
    //autoaction list
    autoaction_list_description: "**Ensemble de mesures**:",
    autoaction_list_null: "Aucune disposition définie :(",
    //autoaction reasons
    autoaction_reason: "[AUTOACTION] Atteint les avertissements prédéterminés",
    //autodelwarn
    autodelwarn_use: "autodelwarn [enable/disable | Set] {Temp}",
    autodelwarn_description: "Cette fonction vous permet d'éliminer les avertissements après un certain temps\n" +
        ":small_blue_diamond: `autodelwarn enable/disable`\n" +
        "Activer/désactiver l'annulation automatique des avertissements\n" +
        ":small_blue_diamond: `autodelwarn set [Temp]\n`" +
        "Définissez le délai après lequel les avertissements seront automatiquement effacés",
    autodelwarn_small_desc: "Définir la suppression automatique des avertissements",
    autodelwarn_examples: "`autodelwarn enable`\n" +
        "`autodelwarn set 1M`",
    autodelwarn_enabled: "AutoDelWarn activé!",
    autodelwarn_disabled: "AutoDelWarn désactivé!",
    //autodelwarn set
    autodelwarn_set_use: "autodelwarn set [Temp]",
    autodelwarn_set_description: "Définissez le délai après lequel les avertissements seront automatiquement effacés",
    autodelwarn_set_examples: "`autodelwarn set 1m`",
    autodelwarn_set_updated: (time) => {
        return `Heure AutoDelWarn mise à jour, **Nouvelle heure**: \`${time}\``
    },
    //blacklist
    blacklist_use: "blacklist [enable/disable | add/remove | action | list] {Choix}",
    blacklist_description: "La liste noire est une liste de mots interdits qui seront automatiquement éliminés, même s'ils sont inclus dans les phrases, **Le bot essaiera également de détecter des phrases/mots similaires (avec des caractères spéciaux ou légèrement différents)**\n\n" +
        ":small_blue_diamond: `blacklist enable/disable`\n" +
        "Activer/désactiver la liste noire sur le serveur\n" +
        ":small_blue_diamond: `blacklist add/remove [Parola/Frase]`" +
        "Ajouter/Supprimer un mot ou une phrase de la BlackList\n" +
        ":small_blue_diamond: `blacklist action [Action]`\n" +
        "Modifier l'action entreprise par le bot lorsqu'il détecte un mot/phrase interdit, utiliser **none** comme action pour ne pas effectuer d'action contre l'utilisateur (en plus de supprimer le message)\n" +
        ":small_blue_diamond: `blacklist list`\n" +
        "Afficher la liste actuelle des mots et expressions interdits",
    blacklist_small_desc: "Ouvrir les paramètres de la liste noire",
    blacklist_examples: "\`blacklist enable\`\n" +
        "\`blacklist add \"parola\"\`\n" +
        "\`blacklist add \"una frase\" \`\n" +
        "\`blacklist remove parola\`\n" +
        "\`blacklist action ban\`\n" +
        "\`blacklist list\`",
    blacklist_enabled: "BlackList ajoutée!",
    blacklist_disabled: "BlackList supprimée!",
    blacklist_add_remove_use: "blacklist add/remove [Parola/Frase]",
    blacklist_add_remove_description: "Ajouter/supprimer un mot ou une phrase de la liste noire, utilisez \`blacklist list\` pour afficher les mots/phrases interdits",
    blacklist_add_remove_examples: "\`blacklist add \"parola\"\`\n" +
        "\`blacklist add \"una frase\"\`\n" +
        "\`blacklist remove \"parola\"\`\n" +
        "\`blacklist remove \"una frase\"\`\n",
    blacklist_word_already_added: "Le mot/la phrase saisi est déjà dans la liste noire",
    blacklist_word_not: "Le mot/phrase saisi n'est pas présent dans la liste noire",
    blacklisted_word_added: (word) => {
        return `Liste noire mise à jour, **Ajoutée**: \`${word}\``
    },
    blacklisted_word_removed: (word) => {
        return `Liste noire mise à jour, **Supprimée**: \`${word}\``
    },
    blacklisted_words: "Mots interdits",
    blacklist_list_clear: "Pas de mots interdits :(",
    blacklist_acted: "[NISD AUTOMOD] Mot interdit détecté!",
    blacklist_in_action: (member) => {
        return `${member}**, Mot interdit détecté!**`
    },
    blacklist_action_use: "blacklist action [Ban | Kick | Warn | Mute | None]",
    blacklist_action_description: "Définit l'action que le bot doit effectuer si un utilisateur envoie un message contenant" +
        " un mot n'est pas autorisé, utilisez **none** pour ne rien faire (en plus de supprimer le message)",
    blacklist_action_examples: "`blacklist action ban`",
    blacklist_action_updated: (action) => {
        return `Mise à jour de l'action BlackList, **Action**: \`${action}\``
    },
    blacklist_action_removed: "Action BlackList supprimée",
    //bypassRole
    bypassRole_use: "bypassRole [add / remove | list] {@Ruolo/ID}",
    bypassRole_description: "Créer une liste de rôles \"ignoré\" par AutoMod\n\n" +
        ":small_blue_diamond: \`bypassRole add/remove [@Ruolo/ID]\`\n" +
        "Ajouter/Supprimer un rôle à \"ignorer\" par AutoMod\n" +
        ":small_blue_diamond: \`bypassRole list\`\n" +
        "Afficher la liste de tous les rôles \"ignoré\" par AutoMod",
    bypassRole_small_desc: "Imposta dei ruoli da far ignorare all'AutoMod",
    bypassRole_examples: "\`bypassRole add @ruolo\`\n" +
        "\`bypassRole remove id\`\n" +
        "\`bypassRole list\`",
    //bypassRole add/remove
    bypassRole_add_remove_use: "bypassRole add/remove [@Ruolo/ID]",
    bypassRole_add_remove_description: "Ajouter/Supprimer un rôle à \"ignorer\" par AutoMod",
    bypassRole_add_remove_examples: "\`bypassRole add @ruolo\`\n" +
        "\`bypassRole remove id\`\n",
    bypassRole_Role_already: "Le rôle sélectionné est déjà ignoré",
    bypassRole_Role_not: "Le rôle sélectionné n'est pas dans la liste des rôles ignorés",
    bypassRole_Role_added: (Role) => {
        return `Rôle ajouté, **Rôle**: ${Role}`
    },
    bypassRole_Role_removed: (Role) => {
        return `Rôle supprimé, **Rôle**: ${Role}`
    },
    bypassRole_ignored_Roles: "Ruoli ignorati",
    bypassRole_clear: "Aucun rôle ignoré",
    //bypasschannel
    bypasschannel_use: "bypasschannel [add/remove | list] {#Canal/ID}",
    bypasschannel_description: "Créer une liste de chaînes ignorées par l'AutoMod du bot\n\n" +
        ":small_blue_diamond: \`bypasschannel add/remove [#Canal/ID]\`\n" +
        "Ajouter/supprimer une chaîne de la liste des chaînes ignorées\n" +
        ":small_blue_diamond:\`bypasschannel list\`\n" +
        "Afficher la liste des chaînes ignorées",
    bypasschannel_small_desc: "Définir les canaux qu'AutoMod doit ignorer",
    bypasschannel_examples: "\`bypasschannel add #Canal\`\n" +
        "\`bypasschannel remove id\`\n" +
        "\`bypasschannel list\`",
    //bypasschannel add/remove
    bypasschannel_add_remove_use: "bypasschannel add/remove [@Ruolo/ID]",
    bypasschannel_add_remove_description: "Ajouter/Supprimer un canal à \"ignorer\" par AutoMod",
    bypasschannel_add_remove_examples: "\`bypasschannel add #Canal\`\n" +
        "\`bypasschannel remove id\`\n",
    bypasschannel_channel_already: "ILe canal sélectionné est déjà ignoré",
    bypasschannel_channel_not: "La chaîne sélectionnée n'est pas dans la liste des chaînes ignorées",
    bypasschannel_channel_added: (channel) => {
        return `Chaîne ajoutée, **Canal**: ${channel}`
    },
    bypasschannel_channel_removed: (channel) => {
        return `Chaîne supprimée, **Canal**: ${channel}`
    },
    bypasschannel_ignored_channels: "Chaînes ignorées",
    bypasschannel_clear: "Aucun canal ignoré",
    //Captcha
    captcha_use: "captcha [Categoria] {Choix}",
    captcha_description: "La vérification via Captcha permet d'envoyer un code en privé à l'utilisateur qui devra le réécrire pour être vérifié.\n" +
        "Chacune des commandes ci-dessous contient une page d'aide distincte où plus d'informations peuvent être trouvées\n" +
        "**Pour fonctionner, la vérification a besoin d'un rôle à attribuer et il est recommandé de définir un canal pour les journaux.**\n\n" +
        ":small_blue_diamond: `captcha enable/disable`\n" +
        "Activer / désactiver la vérification via captcha\n" +
        ":small_blue_diamond: `captcha mode [fake | new | all]`\n" +
        "Définir les utilisateurs pour lesquels je testerais" +
        ":small_blue_diamond: `captcha Role [@Ruolo/ID]`\n" +
        "Sélectionnez un rôle à ajouter à l'utilisateur lors de la vérification complète\n" +
        ":small_blue_diamond: `captcha action [ban | kick | mute | none]`\n" +
        "Sélectionnez une mesure que le bot doit prendre contre un utilisateur qui échoue à la vérification\n" +
        ":small_blue_diamond: `captcha time [minuti]`\n" +
        "Définissez le nombre de minutes dont un utilisateur dispose pour saisir le code\n" +
        ":small_blue_diamond: `captcha bypass [@Membro/ID]`\n" +
        "Faire en sorte qu'un utilisateur ignore la vérification\n" +
        ":small_blue_diamond: `captcha resend [@Membro/ID]`\n" +
        "Demandez à un utilisateur de revérifier\n" +
        ":small_blue_diamond: `captcha log-channel [#Canal/ID | None]`\n" +
        "Sélectionnez un canal pour recevoir toutes les informations sur les vérifications\n" +
        ":small_blue_diamond: `captcha toggle-Role [@Ruolo/ID | None]`\n" +
        "Sélectionnez un rôle à supprimer une fois que l'utilisateur apparaît",
    captcha_examples: "En raison du grand nombre de commandes, tous les exemples sont présents dans les différentes catégories ^^",
    captcha_small_desc: "Configurer la vérification captcha",
    //captcha
    captcha_enabled: "Vérification via captcha activée",
    captcha_disabled: "Vérification via captcha désactivée",
    //captcha mode
    captcha_mode_use: "captcha mode [fake | new | all]",
    captcha_mode_description: "Définissez les utilisateurs à vérifier à l'aide des modes précréés répertoriés:\n" +
        "`fake` = Vérifier les utilisateurs avec des comptes mineurs à \`2-3 heures\`\n" +
        "`new` = Vérifiez les utilisateurs qui se sont récemment inscrits sur Discord \`~ 15 jours\`\n" +
        "`all` = Avoir \`tous les utilisateurs\` vérifiés\n\n" +
        "**Évidemment, si les utilisateurs ne sont pas dans le créneau horaire du mode, ils seront automatiquement vérifiés**",
    captcha_mode_examples: "\`captcha mode all\`",
    captcha_mode_updated: (mode) => {
        return `Les modes de vérification captcha ont changé, **Modes**: \`${mode}\``
    },
    //captcha Role
    captcha_Role_use: "captcha Role [@Ruolo/ID]",
    captcha_Role_description: "Ajoutez le rôle que l'utilisateur doit ajouter à la vérification complète",
    captcha_Role_examples: "\`captcha Role 123456789\`\n" +
        "\`captcha Role @ruolo\`",
    captcha_Role_updated: (Role) => {
        return `Rôle d'audit mis à jour, **Rôle**: ${Role}`
    },
    //captcha action
    captcha_action_use: "captcha action [Ban | Kick | Warn | Mute | None]",
    captcha_action_description: "Définir l'action que le BOT doit effectuer en cas d'échec de la vérification",
    captcha_action_examples: "`captcha action ban`",
    captcha_action_updated: (action) => {
        return `Action de vérification Captcha mise à jour, **Action**: \`${action}\``
    },
    captcha_action_removed: "Action de vérification Captcha supprimée",
    //captcha time
    captcha_time_use: "captcha time [minuti]",
    captcha_time_description: "Définissez en combien de minutes l'utilisateur doit effectuer la vérification **PAR TENTATIVE**, **max 60 minutes**",
    captcha_time_examples: "`captcha time 15`",
    captcha_time_updated: (time) => {
        return `Minutaggio del captcha aggiornato, **Temp**: \`${time} minuti\``
    },
    captcha_time_invalid_time: "Il Nombre da inserire deve essere compreso tra 1 e 60",
    //captcha log-channel
    captcha_logchannel_use: "captcha log-channel [#Canal/ID | None]",
    captcha_logchannel_description: "Idéfinir un canal pour envoyer tous les journaux de vérification via captcha, utiliser **none** pour supprimer le canal",
    captcha_logchannel_examples: "`captcha log-channel #Canal`\n`captcha log-channel 133243243525324`\n`captcha log-channel none`",
    captcha_logchannel_updated: (channel) => {
        if (channel === null) {
            return "Canal de journal désactivé"
        } else {
            return `Canal pour les logs du set captcha, **Canal**: ${channel}`
        }
    },
    //captcha toggle-Role
    captcha_toggleRole_use: "captcha toggle-Role [@Ruolo/ID | None]",
    captcha_toggleRole_description: "Sélectionnez un rôle à supprimer une fois que l'utilisateur apparaît, utilisez **aucun** pour désactiver cette fonctionnalité",
    captcha_toggleRole_examples: "`captcha toggle-Role @ruolo`\n`captcha toggle-Role none`\n`captcha toggle-Role 12321432432545`",
    captcha_toggleRole_updated(Role) {
        if (Role === null) {
            return "Rôle à supprimer désactivé"
        } else {
            return `Rôle à supprimer une fois la vérification définie, **Rôle**: ${Role}`
        }
    },
    //CAPTCHA EMBEDS
    captcha_embed_title: "Vérifier la demande",
    captcha_embed_retry_title: "Échec de la vérification, réessayez",
    captcha_embed_failed_title: "Échec de la vérification",
    captcha_embed_impossible_title: "Vérification impossible",
    captcha_embed_stopped_title: "Vérification annulée",
    captcha_embed_auto_title: "Vérification automatique",
    captcha_embed_auto_started_title: "La vérification automatique a commencé",
    captcha_embed_started_title: "La vérification a commencé",
    captcha_embed_completed_title: "Vérification effectuée",
    captcha_embed_error_title: "Erreur lors de la vérification",
    captcha_acted: "La vérification via Captcha a échoué",
    captcha_embed_bypass_title: "Vérification contournée",
    autocaptcha_embed_impossible_title: "Vérification automatique, impossible",
    captcha_embed_description: (minutes, tries) => {
        return `**Pour accéder au serveur, il est nécessaire d'envoyer le code ci-dessous dans ce chat**\n` +
            `**Il est temps d'envoyer le code**: \`${minutes} Minutes\`\n` +
            `**Tentatives restantes**: \`${tries}\`\n\n` +
            `**Code à envoyer**:`
    },
    captcha_embed_retry_description: (mode) => {
        if (mode === "time") {
            return "Temps libre"
        } else if (mode === "fail") {
            return "Mauvais code"
        } else if (mode === "tries") {
            return "Tentatives terminées"
        }
    },
    captcha_embed_stopped_description: (member) => {
        return `L'utilisateur ${member.user.username}#${member.user.discriminator} || \`${member.user.id}\` a quitté le serveur, par conséquent sa vérification a été annulée`
    },
    captcha_embed_started_description: (member) => {
        return `L'utilisateur ${member.user.username}#${member.user.discriminator} || \`${member.user.id}\` a commencé la vérification`
    },
    captcha_embed_auto_description_user: "Il a été détecté que vous avez déjà le rôle sur le serveur, vous avez donc été automatiquement vérifié",
    captcha_embed_auto_description: (member) => {
        return `L'utilisateur ${member.user.username}#${member.user.discriminator} || \`${member.user.id}\` était coché automatiquement, car il avait pour rôle d'ajouter`
    },
    captcha_embed_completed_description_user: "Vérification réussie, vous recevrez bientôt le rôle",
    captcha_embed_completed_description: (member) => {
        return `L'utilisateur ${member.user.username}#${member.user.discriminator} || \`${member.user.id}\` ça s'est passé avec succès`
    },
    captcha_embed_failed_description: (member) => {
        return `L'utilisateur ${member.user.username}#${member.user.discriminator} || \`${member.user.id}\` n'a pas pu vérifier`
    },
    captcha_embed_auto_started_description: (member) => {
        return `L'utilisateur ${member.user.username}#${member.user.discriminator} || \`${member.user.id}\` n'entre pas dans la plage d'action de vérification, vérification contournée`
    },
    captcha_embed_bypass_description: (user, bypassMember) => {
        return `L'utilisateur ${user.username}#${user.discriminator} || \`${user.id}\` contourné la vérification de l'utilisateur ${bypassMember.user.username}#${bypassMember.user.discriminator} || \`${bypassMember.user.id}\``
    },
    //CAPTCHA ERRORS
    captcha_owner_error: (member, error) => {
        return `Il semble y avoir eu une erreur lors de la vérification de l'utilisateur \`${member.user.username}#${member.user.discriminator} || ${member.user.id}\`\n\n` +
            `**Error**: \`${error}\`\n\n` +
            `*Il est conseillé de mettre en place un canal captcha log si vous ne souhaitez plus recevoir ces messages*`
    },
    captcha_error_invalid_Role: "Le rôle à attribuer à la vérification complète est manquant/invalide",
    captcha_error_invalid_toggleRole: "Le rôle à supprimer lors de la vérification complète est manquant/invalide",
    captcha_error_invalid_permissions: "Le bot ne peut pas effectuer la vérification car il ne dispose pas des autorisations nécessaires",
    captcha_error_dm_blocked: (member) => {
        return `L'utilisateur \`${member.user.username}#${member.user.discriminator} || ${member.user.id}\` a des DM verrouillés, donc je ne peux pas vérifier`
    },
    captcha_error_user: "Je ne peux pas vérifier en raison d'un problème de configuration",
    //CAPTCHA BYPASS
    captcha_bypass_use: "captcha bypass [@utilisateur/ID]",
    captcha_bypass_description: "Faire en sorte qu'un utilisateur ignore la vérification",
    captcha_bypass_examples: "\`captcha bypass @Polliog\`\n" +
        "\`captcha bypass 173569203977060353\`",
    captcha_bypassed_cmd: "L'utilisateur a été vérifié avec succès",
    //CAPTCHA RESEND
    captcha_resend_use: "captcha resend [@utilisateur/ID]",
    captcha_resend_description: "Demandez à un utilisateur de revérifier",
    captcha_resend_examples: "\`captcha resend @Polliog\`\n" +
        "\`captcha resend 173569203977060353\`",
    captcha_resend_cmd: "La vérification a démarré avec succès",
    //TICKETS
    //TICKETS INTERNAL
    ticketsInt_opened: "Ticket ouvert",
    ticketsInt_openedInChannel: (channel) => `Ticket ouvert dans le canal ${channel}`,
    ticketsInt_openedby: (member) => `Ticket ouvert par ${member}`,
    ticketsInt_reopenedby: (member) => `Ticket rouvert par ${member}`,
    ticketsInt_reopened: "Ticket rouvert",
    ticketsInt_panel: "Panel",
    ticketsInt_ticket: "Ticket",
    ticketsInt_close: "Fermer",
    ticketsInt_closed: "Verrouillé",
    ticketsInt_closedPhrase: "Ticket fermé",
    ticketsInt_closedby: (member) => `Ticket clôturé par ${member}`,
    ticketsInt_closedOptions: "📝: Notez le ticket \n\n 🗑️: Supprimez le ticket \n\n 🔁: Rouvrez le ticket",
    ticketsInt_transcriptSavedTitle: "Transcription enregistrée",
    ticketsInt_transcriptSavedDescriptionChannel: (channel) => `Transcription envoyée dans le canal ${channel}`,
    ticketsInt_transcriptSavedDescriptionUser: (user) => `Transcription enregistrée par ${user}`,
    ticketsInt_transcriptSavedInfos: "Pour voir la transcription, téléchargez le fichier joint ci-dessus",
    ticketsInt_delete_ask: "Voulez-vous vraiment supprimer ce ticket ?",
    ticketsInt_deleted_logs: "Ticket supprimé",
    //TICKETS COMMANDS
    tickets_use: "tickets [Categoria] {Choix}",
    tickets_description: "Les tickets vous permettent de gérer les demandes des utilisateurs de manière plus ordonnée, en créant un ticket à l'aide de la commande appropriée" +
        "vous allez créer un `panel` (message avec un bouton en dessous) à partir duquel vous pourrez interagir pour créer un ticket privé.\n" +
        "**Les tickets prennent les autorisations de la catégorie dans laquelle ils sont créés**\n\n" +
        ":small_blue_diamond: `ticket create`\n" +
        "Lancer la création du panneau à partir duquel créer les tickets\n" +
        ":small_blue_diamond: `ticket panel [panelID]`\n" +
        "Recréer un panneau précédemment créé\n" +
        ":small_blue_diamond: `ticket edit [panelID]`\n" +
        "Modifier les paramètres d'un panneau\n" +
        ":small_blue_diamond: `ticket delete [panelID]`\n" +
        "Supprimer définitivement un panneau\n" +
        ":small_blue_diamond: `ticket logs [#Canal/ID | None]`\n" +
        "Définissez un canal pour les journaux de tickets, entrez \`none\` pour désactiver les journaux\n" +
        ":small_blue_diamond: `ticket transcript-logs [#Canal/ID | None]`\n" +
        "Définissez un canal pour envoyer des transcriptions dans un canal autre que les journaux, entrez \`none\` pour désactiver les journaux\n" +
        ":small_blue_diamond: `ticket info (panelID)`\n" +
        "Affiche des informations sur un panneau, si aucun panneau n'est saisi, tous les panneaux seront affichés\n" +
        ":small_blue_diamond: `ticket [Open/Close/Transcript]`\n" +
        "Ouvrir/Fermer ou noter le ticket dans lequel la commande a été exécutée",
    tickets_examples: "En raison du grand nombre de commandes, tous les exemples sont présents dans les différentes catégories^^",
    tickets_small_desc: "Configurez les tickets sur votre serveur",
    //tickets create
    tickets_creation_sys: "Système de création de tickets",
    tickets_create_message: "Voulez-vous commencer à créer un nouveau panneau? \n **Le panneau sera créé dans ce canal**",
    ticket_create_exited: "Création du panneau annulée.",
    tickets_create_insert_title: "Tapez un titre pour le ticket",
    tickets_create_insert_message: "Tapez un message que le bot doit envoyer lorsqu'un nouveau ticket est créé",
    tickets_create_insert_category: "Saisissez l'identifiant ou le nom de la catégorie dans laquelle les tickets seront créés.\n\n" +
        "**Remarque**: Les tickets (chaînes) prendront les autorisations de cette catégorie",
    tickets_create_invalid_category: "Catégorie non valide, veuillez réessayer",
    tickets_create_insert_upmessage: "Tapez le message en dehors de l'intégration, utile pour envoyer un ping aux rôles de support",
    tickets_create_insert_Role: "Entrez l'identifiant ou taguez le rôle que vous aurez pour vous occuper des tickets.\n\n" +
        "**Remarque**: Ce rôle sera forcé d'ajouter des autorisations pour écrire dans le ticket (canal) *si nécessaire*",
    tickets_create_invalid_Role: "Rôle non valide, veuillez réessayer",
    tickets_create_confirm_message: "Confirmer la création d'un nouveau panneau avec les paramètres suivants?",
    tickets_create_confirm_message_how: "Tapez \`y\` pour confirmer ou \`n\` pour annuler",
    //tickets general
    tickets_panel: 'Pour créer un ticket cliquez sur le bouton :tickets: ci-dessous',
    tickets_panel_footer: "Tickets by NISD",
    create_ticket: "Créer un billet",
    //ticket panel
    invalid_ticket_panel: 'Panel introuvable, utilisez \`tickets info\` pour voir les identifiants des panels existants',
    tickets_panel_use: "ticket panel [panelID]",
    tickets_panel_description: "Recréer un panneau précédemment créé",
    tickets_panel_examples: "ticket panel ID",
    //ticket edit
    tickets_edit_title: "Que voulez-vous changer?",
    tickets_edit_sys: "Système de modification des billets",
    tickets_edit_use: "ticket edit [panelID]",
    tickets_edit_description: "Modifier les paramètres d'un panneau\n",
    tickets_edit_exited: "Modification annulée",
    tickets_edit_examples: "ticket edit ID",
    tickets_edited: "Paramètres du panneau enregistrés",
    tickets_edited_title: "Paramètres du panneau enregistrés, utilisez la commande \`ticket panel [panelID]\` pour les prendre en compte",
    //ticket delete
    tickets_delete_use: "ticket delete [panelID]",
    tickets_delete_description: "Supprimer définitivement un panneau\n",
    tickets_delete_examples: "ticket delete ID",
    tickets_delete_title: (panelID) => {
        return `Supprimer le ticket de panneau \`${panelID}\` ?`
    },
    tickets_delete_confirmed: ":accettato_gif: Panneau de ticket supprimé",
    tickets_delete_exited: ":negato_gif: Opération annulée",
    tickets_delete_sys: "Système d'élimination des tickets",
    //ticket info
    tickets_info_title: "NISD Tickets Info",
    tickets_info_description: (logs, tlogs) => {
        return `**Logs**: ${logs}\n**Transcript Logs**: ${tlogs}\n`
    },
    //ticket logs
    tickets_logs_use: "ticket logs [#Canal/ID | None]",
    tickets_logs_description: "Sélectionnez un canal pour envoyer les journaux de tickets, entrez \`none\` pour désactiver les journaux",
    tickets_logs_examples: "ticket logs ID\nticket logs none",
    tickets_logs_success: (none, channel) => {
        return none ? "A partir de maintenant, plus aucun journal lié aux tickets ne sera envoyé" : `Canal des journaux de tickets mis à jour, nouveau canal: ${channel}`
    },
    //ticket transcript-logs
    tickets_transcriptlogs_use: "ticket transcript-logs [#Canal/ID | None]",
    tickets_transcriptlogs_description: "Définissez un canal pour envoyer les transcriptions dans un canal autre que les journaux, entrez \`none \` pour désactiver les journaux",
    tickets_transcriptlogs_examples: "ticket transcript-logs ID\nticket transcript-logs none",
    tickets_transcriptlogs_success: (none, channel) => {
        return none ? "À partir de maintenant, les transcriptions seront renvoyées au canal des journaux (si défini) ou au ticket (sinon) " : ` Canal de transcription mis à jour, nouveau canal: ${channel}`
    },
    //language
    lang_use: "lang [langue]",
    lang_description: "Choisissez la langue du bot sur ce serveur",
    lang_examples: "`lang it`\n`lang en`\n`lang jp`\n`lang ru`\n`lang fr`",
    //autoRoles
    autoRoles_use: "autoRoles [user/bot | list] {Rôle}",
    autoRoles_description: "Définissez les rôles à ajouter aux utilisateurs/bots dès qu'ils entrent sur le serveur, en refaisant la commande le rôle sera supprimé de la liste\n\n" +
        ":small_blue_diamond: `autoRoles user/bot [@Rôle/ID]`\n" +
        "Ajouter/supprimer un rôle de la liste\n" +
        ":small_blue_diamond: `autoRoles list`\n" +
        "Vérifiez les rôles automatiques définis",
    autoRoles_examples: "`autoRoles user @Rôle`\n" +
        "`autoRoles bot id`\n" +
        "`autoRoles list`",
    autoRoles_small_desc: "Aggiungi automaticamente ai nuovi utenti/bots",
    autoRoles_add: (Role) => { return `Rôle ajouté: ${Role} à autoRoles` },
    autoRoles_remove: (Role) => { return `Suppression du rôle: ${Role} des autoRoles` },
    //autoRoles list
    autoRoles_list: "Liste des autoRoles",
    //logs
    logs_use: "logs",
    logs_description: "Les journaux permettent de garder une trace de toutes les actions effectuées sur le serveur\n\n" +
        "**Cette fonction ne peut être configurée que via le [[NISD Dashboard]](https://nisdbot.xyz/)**",
    logs_small_description: "Les journaux permettent de garder une trace de toutes les actions effectuées sur le serveur",
    //logs events
    logs_channelCreate_description: (channel) => {
        switch (channel.type) {
            case "GUILD_TEXT":
                return `Nouveau canal de texte créé (${channel})`
            case "GUILD_VOICE":
            case "GUILD_STAGE_VOICE":
                return `Nouveau canal vocal créé (${channel})`
            case "GUILD_CATEGORY":
                return `Nouvelle catégorie créée (${channel})`
            default:
                return `Nouvelle chaîne créée (${channel})`

        }
    },
    logs_channelDelete_description: (channel) => {
        switch (channel.type) {
            case "GUILD_TEXT":
                return `Chaîne de texte supprimée (${channel.name})`
            case "GUILD_VOICE":
            case "GUILD_STAGE_VOICE":
                return `Canal vocal supprimé (${channel.name})`
            case "GUILD_CATEGORY":
                return `Catégorie supprimée (${channel.name})`
            default:
                return `Chaîne supprimée (${channel.name})`
        }
    },
    logs_channelUpdate_description: (channel) => {
        switch (channel.type) {
            case "GUILD_TEXT":
                return `Canal textuel modifié (${channel})`
            case "GUILD_VOICE":
            case "GUILD_STAGE_VOICE":
                return `Changement de canal vocal (${channel})`
            case "GUILD_CATEGORY":
                return `Catégorie changée (${channel.name})`
            default:
                return `Changement de chaîne (${channel.name})`
        }
    },
    overwrites_removed_for: "Autorisations supprimées pour",
    added_overwrites_for: "Ajout d'autorisations pour",
    logs_RoleCreate_description: (Role) => {
        return `Nouveau rôle créé (${Role})`
    },
    logs_RoleDelete_description: (Role) => {
        return `Rôle supprimé (${Role.name})`
    },
    logs_RoleUpdate_description: (Role) => {
        return `Changement de rôle (${Role})`
    },
    logs_messageDelete_description: (channel) => {
        return `Message supprimé dans ${channel} (${channel.name})`
    },
    logs_message_sent_above: "Message envoyé après l'intégration en raison de la longueur...",
    logs_message_bulk_description: (count) => {
        return `**${count}** messages ont été supprimés et enregistrés`
    },
    logs_message_update_description: (message) => {
        return `**${message.author.username}#${message.author.discriminator}** a changé son message en ${message.channel}`
    },
    logs_member_remove_description: (member) => {
        return `**${member.user.username}#${member.user.discriminator}** a quitté le serveur`
    },
    logs_member_update_description: (member, author) => {
        return `L'utilisateur **${member.user.username}#${member.user.discriminator}** a été modifié par ${author}`
    },
    logs_member_join_description: (member) => {
        return `**${member}** est entré sur le serveur`
    },
    logs_invite_used: (invite, user) => {

        if (!user) {
            user = "Étranger"
        } else {
            user = `${user.username}#${user.discriminator}`
        }

        return `Invitation ${invite} utilisée créée par ${user}`
    },
    logs_invite_impossibile() {
        return "Impossible de trouver l'invitation, une URL personnalisée a probablement été utilisée"
    },
    logs_member_kicked(member, author) {
        return `**${member.user.username}#${member.user.discriminator}** a été frappé par ${author}`
    },
    logs_member_banned(user, author) {
        return `**${user.username}#${user.discriminator}** a été banni de ${author}`
    },
    logs_member_unbanned(user, author) {
        return `**${user.username}#${user.discriminator}** n'a pas été banni de ${author}`
    },
    logs_guild_updated(author) {
        return `**${author.user.username}#${author.user.discriminator}** a mis à jour le serveur`
    },
    logs_emoji_create(emoji, author) {
        return `**${author.user.username}#${author.user.discriminator}** a créé l'emoji **${emoji.name}**`
    },
    logs_emoji_delete(emoji, author) {
        return `**${author.user.username}#${author.user.discriminator}** a éliminé l'emoji **${emoji.name}**`
    },
    logs_emoji_update(emoji, author) {
        return `**${author.user.username}#${author.user.discriminator}** modifié emoji **${emoji.name}**`
    },
    logs_voice_update(member, author) {
        return `A' **${member.user.username}#${member.user.discriminator}** vous avez changé votre statut vocal de **${author.user.username}#${author.user.discriminator}**`
    },
    logs_voice_join(member, channel) {
        return `**${member.user.username}#${member.user.discriminator}** rejoint le canal vocal** ${channel.name}**`
    },
    logs_voice_leave(member, channel) {
        return `**${member.user.username}#${member.user.discriminator}** a quitté le canal vocal** ${channel.name}**`
    },
    logs_voice_switch(member, oldChannel, newChannel) {
        return `**${member.user.username}#${member.user.discriminator}** est passé du canal vocal **${oldChannel.name}** au canal vocal **${newChannel.name}**`
    },
    //antiscam
    antiscam_use: "antiscam [enable/disable | action] {Azione}",
    antiscam_description: "Supprimer automatiquement et prendre des mesures lors de l'envoi de liens malveillants\n" +
        ":small_blue_diamond: `antiscam enable/disable`\n" +
        "Abilita o disabilita l'antiscam\n" +
        ":small_blue_diamond: `antiscam action [Ban | Kick | Warn | Mute | none]`\n" +
        "Seleziona l'azione da eseguire quando rilevato un link malevolo",
    antiscam_small_desc: "Elimina automatica e prendi azioni all'invio di link malevoli",
    antiscam_examples: "`antiscam enable`\n`antiscam ban`",
    //antiscam enable
    antiscam_enabled: "AntiScam activé",
    antiscam_disabled: "AntiScam deactivé",
    //antiscam action
    antiscam_action_updated: (action) => {
        return `Action AntiScam mise à jour, **Action**: \`${action}\``
    },
    antiscam_acted: "[NISD AutoMod] Lien malveillant détecté!",
}