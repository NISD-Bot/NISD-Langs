/*
    File della lingua del BOT NISD,
    @Authors: @Polliog#7772 | 𝓝𝓪𝓴𝓪𝓶𝓸𝓽𝓸 𝓢𝓱𝓲𝓰𝓮𝓽𝓸𝓴𝓲#0016
    @Translated by: @Polliog#7772 | 𝓝𝓪𝓴𝓪𝓶𝓸𝓽𝓸 𝓢𝓱𝓲𝓰𝓮𝓽𝓸𝓴𝓲#0016

    Note per tradurre questo file:
    - Non modificare il nome dei metodi, delle variabili, delle funzioni
    - Non modificare gli autori
    - Tradurre totalmente il file (anche le annotazioni)
 */


module.exports = {
    lang: "alb", // Lang del file
    //PAROLE GENERALI DEL BOT: Tradurle seguendo anche le maiuscole
    maintenance: "sdfsdfsd",
    message: "Messaggsdfsdfio",
    messages: "Mesdfsdfssaggi",
    examples: "Esempi",
    site: "Sito",
    support_discord: "Server di supporto",
    aliases: "Alias",
    changes_saved: 'Impostazioni Aggiornate',
    cmd_done: "Comando Eseguito",
    author: "Autore",
    reason: "Motivo",
    reason_not_provided: "Non provveduto",
    user: "Utente",
    users: "Utenti",
    page: "Pagina",
    moderation: "Moderazione",
    settings: "Impostazioni",
    utility: "Utility",
    active: "Abilitato",
    not_active: "Disabilitato",
    report: "Segnalazione",
    nothing: "Nessuna",
    action: "Azione",
    limit: "Limite",
    time: "Tempo",
    actions: "Azioni",
    measure: "Provvedimento",
    actual_mode: "Modalità attuale",
    mode: "Modalità",
    role: "Ruolo",
    title: "Titolo",
    embed_message: "Messaggio Embed",
    external_message: "Messaggio Esterno",
    category: "Categoria",
    support_role: "Ruolo di Supporto",
    //Azioni utili per il bot tradurre seguendo le maiuscole
    to_add: "da Aggiungere",
    to_remove: "da Rimuovere",
    //ERRORI del bot tradurre come meglio si crede
    bot_error: "Si e' verificato un errore interno, l'errore verrà inviato automaticamente ai developer",
    error: "Errore",
    insufficient_permissions: "Permessi insufficienti",
    invalid_user: "Utente non valido!",
    invalid_member: "Membro non valido!",
    invalid_role: "Ruolo non valido!",
    invalid_channel: "Canale non valido!",
    invalid_permission: "Al bot manca il permesso:",
    no_basic_permissions: "Al bot mancano i permessi base, come quello di inviare link incorporati e mandare messaggi",
    no_user_permission: "Per utilizzare il comando devi avere il permesso:",
    owner_restriction: "Solo l'Owner del server puo' eseguire questo comando",
    owner_restriction_plus: "Solo l'Owner del server o chi possiede un ruolo `manager` puo' eseguire questo comando",
    /*
        time_left: timestamp unix
        cmd: comando
     */
    cmd_cooldown: (time_left, cmd) => {
        return `Potrai riutilizzare il comando \`${cmd}\` <t:${time_left}:R>` // utilizzare <t:> per il tempo (discord timestamp)
    },
    already_banned: "L'utente risulta gia' bannato",
    actual_channel: "Canale attuale",
    not_banned: "L'utente non risulta bannato",
    cant_ban: "Non posso bannare questo utente",
    cant_kick: "Non posso espellere questo utente",
    user_rank_equal: "L'utente selezionato e' di grado maggiore o uguale al tuo",
    invalid_mute_role: "Il ruolo `mute` selezionato non e' valido o inesistente, sei pregato di reimpostarlo tramite `setmuterole [@Ruolo/ID]`",
    member_not_manageable: "Il BOT non puo' eseguire azioni su questo utente",
    warn_not_exists: "Warn inesistente",
    no_warns: "L'utente non ha warns",
    bad_syntax: "Composizione del comando errata, controlla di aver usato correttamente le virgolette ecc",
    message_too_long: "Il contenuto supera i 256 caratteri",
    maximum_ticket_panels_reached: "Hai raggiunto il limite di pannelli disponibili",
    tickets_channel_error_user: "Non è possibile creare il ticket attualmente",
    tickets_channel_error_logs: "Non è stato possibile aprire un ticket a causa di permessi insufficienti",
    tickets_channel_closed_logs: "Si è verificato un errore durante la chiusura del ticket",
    /*
        time: timestamp unix
     */
    ticketsInt_rateLimit: (time) => `Potrai rifare questa azione: \<t:${time}:R\>`,
    ticketsInt_alreadyClosed: "Il ticket è già chiuso.",
    ticketsInt_transcriptAlreadySent: "La trascrizione del ticket è già stata richiesta in precedenza.",
    //HELP (comando)
    not_in_dm: "Non disponibile nei DMS",
    i_cant_write_you: "Non posso scriverti nei DMS, aprili o aggiungi `-h` alla fine del comando.",
    help_sent: "Ti ho inviato la lista nei DMS",
    help_title: "Comandi NISD",
    help_description: "Per controllare una sezione o un comando specifico usa `help [Sezione/Comando]`.\n" +
        "Se vuoi che questo comando venga mostrato in chat piuttosto che nei DMS aggiungi `-h` alla fine del comando. Quindi `help -h` o `help moderation -h`",
    arguments_legend: "**Legenda dei parametri**:\n" +
        "`[]` - Significa che il parametro e' obbligatorio.\n" +
        "`()` - Significa che il parametro e' opzionale.\n" +
        "`{}` - Argomento condizionale, E' richiesto solo in alcuni casi.\n" +
        "`1 | 2 | 3` - Scegli tra queste opzioni.\n" +
        "`[@Utente/ID]` Il parametro puo' essere sia il tag che l'id in un utente\n" +
        "**Non aggiungere anche i simboli {}, [], () ed emoji al comando**",
    cmd_utilize: "Utilizzo del comando",
    not_configured: "`Non configurato`",
    actual_role: "Ruolo attuale",
    time_format: "Formattazione del tempo",
    moderation_description: "*Mantieni il tuo server sicuro e controlla cosa accade*",
    automoderation_description: "*Mantieni il server sicuro in maniera automatica*",
    automation_description: "*Automatizza le funzioni del bot*",
    settings_description: "*Configura NISD tramite comandi*",
    utility_description: "*Comandi utili che non so come classificare*",
    info_description: "*Ricava informazioni sul bot, utenti, servers ecc.*",
    //TIMES,
    year: "Anno",
    years: "Anni",
    month: "Mese",
    months: "Mesi",
    day: "Giorno",
    days: "Giorni",
    hour: "Ora",
    hours: "Ore",
    minute: "Minuto",
    minutes: "Minuti",
    second: "Secondo",
    seconds: "Secondi",
    duration: "Durata",
    //AVATAR
    avatar_use: "avatar (@Utente/ID)",
    avatar_description: "Visualizza l'avatar dell'utente o bot selezionato",
    avatar_small_desc: "Visualizza l'avatar dell'utente o bot selezionato",
    avatar_examples: "`avatar @Polliog`\n `avatar ID`",
    required_by: (user) => {
        return `Richiesto da ${user.username}#${user.discriminator}`
    },
    avatar_of: (user) => {
        return `Avatar di ${user.username}#${user.discriminator}`
    },
    //USERINFO
    userinfo_use: "user (@Utente/ID)",
    userinfo_description: "Visualizza le informazioni di un utente",
    userinfo_small_desc: "Visualizza le informazioni di un utente",
    userinfo_examples: "`user ID`\n`user @Polliog`",
    info_of: (member) => {
        return `Info di ${member.user.username} | ${member.user.id}`
    },
    name: "Nome",
    mention: "Menzione",
    status: "Stato",
    created: "Account Creato",
    entered: "Entrato nel server",
    yes: "Si",
    no: "No",
    roles: "Ruoli",
    no_role: "Nessun ruolo",
    //SERVERINFO
    icon: "Icona",
    region: "Regione",
    categories: "Categorie",
    text_channels: "Canali Testuali",
    voice_channels: "Canali Vocali",
    members: "Membri",
    channels: "Canali",
    server_use: "server",
    server_description: "Visualizza informazioni sul server",
    server_small_desc: "Visualizza informazioni sul server",
    //SAY
    say_use: "say [Messaggio]",
    say_description: "Fai ripetere al bot un messaggio",
    say_examples: "`say ciao mondo`",
    //BUG
    bug_sent: "Segnalazione del bug inviata!",
    bug_use: "bug [Messaggio]",
    bug_description: "Segnala un errore al nostro team di supporto (minimo 50 caratteri)\n" +
        "Nella segnalazione includete più dettagli possibili.\n\n" +
        ":warning: **Attenzione** qualunque abuso del comando porterà a delle conseguenze!",
    bug_small_desc: 'Segnala un errore al nostro team di supporto',
    bug_examples: "`bug Il comando warn mi da questo errore...`",
    bug_min_chars: "Il messaggio deve essere lungo almeno 50 caratteri.",
    //INVITE
    invite_content: "Grazie per l'interesse al bot",
    invite_me: "Invitami",
    //MANAGER
    manager_use: "manager [@Ruolo/ID/None]",
    manager_description: "Imposta un ruolo che puo' modificare le impostazioni riservate solo all'owner del server, utilizzare `none` per rimuovere il ruolo.\n" +
        "Il ruolo `manager` e' anche automaticamente bypassato dall'AntiNuke" +
        "\n\n :warning: **Utilizzare il comando con cautela, Lo staff del BOT non si prende responsibilità di eventuali danni al server**",
    manager_small_desc: "Imposta un ruolo che puo' modificare le impostazioni riservate solo all'owner",
    manager_examples: "`manager @⚡ | Amministratore `\n" +
        "`manager 589443292673081385`\n" +
        "`manager none`",
    manager_saved: (role) => {
        return `Ruolo \`Manager\` impostato. **Nuovo ruolo**: ${role}`
    },
    manager_removed: "Ruolo \`Manager\` eliminato",
    //CLEAR
    clear_use: "clear [Numero]",
    clear_description: "Cancella un numero di messaggi in un canale. **[Max. 1000]**",
    clear_small_desc: "Cancella un numero di messaggi in un canale",
    clear_examples: "`clear 1000`",
    max_messages: "Puoi eliminare un massimo di 100 messaggi per volta",
    clear_done: (number) => {
        return `<a:accettato_gif:742023278071119913> Eliminati \`${number}\` messaggi`
    },
    //BAN
    ban_use: "ban [@Utente/ID] (tempo) (motivo) (-c)",
    ban_description: "Banna un utente dal server permanentemente o per un tempo specifico, aggiungi al comando `-c` per eliminare anche i messaggi dell'utente" +
        " inviati negli ultimi 7 giorni. Se vuoi bannare temporaneamente un utente formatta il tempo come `3h 16m 8s` per 3 ore, 16 minuti e 8 secondi" +
        "\nIl comando funziona anche per gli utenti non presenti nel server",
    ban_small_desc: "Banna un utente dal server, tempo facoltativo",
    ban_examples: "`ban @Utente`\n" +
        "`ban ID flood -c`\n" +
        "`ban @Utente 1d reca fastidio`\n",
    user_banned: "Utente bandito",
    user_banned_dm: (guild) => {
        return `Sei stato bandito da ${guild.name}`
    },
    ban_timeout: "Ban scaduto",
    ban_timeout_dm: (guild) => {
        return `Il tuo ban su ${guild.name} e' scaduto, adesso puoi rientrare nel server`
    },
    //unban
    unban_use: "unban [@Utente/ID] (motivo)",
    unban_small_desc: "Sbanna un utente dal server",
    unban_description: "Sbanna un utente dal server in modo da poter farlo rientrare",
    unban_examples: "`unban @Utente`" +
        "\n`unban ID opls persona sbagliata`",
    user_unbanned: "Utente Sbannato",
    user_unbanned_dm: (guild) => {
        return `Sei stato sbannato da ${guild.name}`
    },
    //kick
    kick_use: "kick [@Utente/ID] (motivo) (-c)",
    kick_description: "Espelli un utente dal server, aggiungi `-c` per eliminare anche i messaggi inviati dall'utente negli ultimi 7 giorni",
    kick_small_desc: "Espelli un utente dal server",
    kick_examples: "`kick ID`" +
        "\n`kick @Utente -c`" +
        "\n`kick @Utente reca fastidio in vocale`" +
        "\n`kick @Utente spamma nella chat principale -c`",
    user_kicked: "Utente Espulso",
    user_kicked_dm: (guild) => {
        return `Sei stato espulso da ${guild.name}`
    },
    //mute
    mute_use: "mute [@Utente/ID] (tempo) (motivo)",
    mute_description: "Muta un utente in modo che non possa piu' parlare. " +
        "Se vuoi mutare temporaneamente un utente formatta il tempo come `3h 16m 8s` per 3 ore, 16 minuti e 8 secondi. " +
        "L'utente rimarrà mutato anche se esce e rientra dal server.\n" +
        "**Per favore tieni nota che con i server con un ruolo di default custom il comando potrebbe non funzionare a causa della sovrascrittura dei permessi**",
    mute_small_desc: "Muta un utente, tempo facoltativo",
    mute_examples:
        "`mute ID`\n" +
        "`mute @Utente`\n" +
        "`mute @Utente 15m basta spammare`\n" +
        "`mute @Utente reca continuamente fastidio in vocale`",
    user_muted: "Utente Mutato",
    user_muted_dm: (guild) => {
        return `Sei stato mutato su ${guild.name}`
    },
    mute_timeout: "Mute scaduto",
    mute_timeout_dm: (guild) => {
        return `Non sei piu' mutato su ${guild.name}, puoi tornare a parlare nel server`
    },
    //unmute
    unmute_use: "unmute [@Utente/ID] (motivo)",
    unmute_description: "Smuta un utente in modo che possa di nuovo parlare nel server",
    unmute_small_desc: "Smuta un utente nel server",
    unmute_examples:
        "`unmute ID`\n" +
        "`unmute @Utente`\n" +
        "`unmute @Utente persona sbagliata, scusa <3`",
    user_unmuted: "Utente Smutato",
    user_unmuted_dm: (guild) => {
        return `Sei stato smutato su ${guild.name}`
    },
    //muterole
    muterole_use: "muterole [@Ruolo/ID] (-n)",
    muterole_description: "Imposta il ruolo da utilizzare per il comando `mute`" +
        "\n\n **:warning: Utilizzando il comando il BOT provera' a impostare il ruolo in tutti i canali presenti nel server, per evitare cio' aggiungi `-n` al comando**",
    muterole_small_desc: "Imposta il ruolo da utilizzare per il comando `mute`",
    muterole_examples:
        "`muterole ID`\n" +
        "`muterole @Ruolo`\n" +
        "`muterole @Ruolo -n`",
    muterole_saved: (role) => {
        return `Ruolo \`mute\` impostato. **Nuovo ruolo**: ${role}`
    },
    //warn
    warn_use: "warn [@Utente/ID] (motivo)",
    warn_description: "Avvisa un utente",
    warn_small_desc: "Avvisa un utente",
    warn_examples:
        "`warn ID`\n" +
        "`warn @Utente smettila di spammare`",
    user_warned: "Utente Warnato",
    user_warned_dm: (guild) => {
        return `Sei stato warnato su ${guild.name}`
    },
    //unwarn
    unwarn_use: "unwarn [@Utente/ID] [Numero] (Motivo)",
    unwarn_description: "Rimuovi un avvertimento ad un utente, per trovare il numero di un warn utilizza `warnings [@Utente]`",
    unwarn_small_desc: "Rimuovi un avvertimento ad un utente",
    unwarn_examples:
        "`unwarn ID`\n" +
        "`unwarn @Utente`\n" +
        "`unwarn @Utente ti perdono bro`",
    user_unwarned: "Warn eliminato",
    user_unwarned_dm: (guild) => {
        return `Warn eliminato su ${guild.name}`
    },
    //clearwarn
    clearwarns_use: "clearwarns [@Utente/ID] (Motivo)",
    clearwarns_description: "Cancella tutti gli avvisi dati ad un utente",
    clearwarns_small_desc: "Cancella tutti gli avvisi di un utente",
    clearwarns_examples:
        "`clearwarns ID`\n" +
        "`clearwarns @Utente`\n" +
        "`clearwarns @Utente hai preso il perdono`",
    user_clearwarns: "Warns totalmente eliminati",
    user_clearwarns_dm: (guild) => {
        return `Warn totalmente eliminati su ${guild.name}`
    },
    //warnings
    warnings_use: "warnings [@Utente/ID] (pagina)",
    warnings_description: "Guarda gli avvisi di un'utente specifico",
    warnings_small_desc: "Guarda gli avvisi di un'utente specifico",
    warnings_examples:
        "`warnings ID`\n" +
        "`warnings ID 2`\n" +
        "`warnings @Polliog`\n" +
        "`warnings @Polliog 2`",
    warns_of: (user) => {
        return `Avvertimenti di ${user.username}#${user.discriminator}`
    },
    //reportchannel
    reportchannel_use: "reportchannel [#Canale/ID]",
    reportchannel_description: "Imposta un canale per le segnalazioni degli utenti",
    reportchannel_small_desc: "Imposta un canale per le segnalazioni degli utenti",
    reportchannel_examples:
        "`reportchannel ID`\n" +
        "`reportchannel #Canale`",
    reportchannel_saved: (channel) => {
        return `Canale per le segnalazioni impostato, **Nuovo canale**:${channel}`
    },
    //prefix
    my_prefix: (prefix) => {
        return `Il mio prefisso in questo server e' \`${prefix}\``
    },
    prefix_use: "prefix [Prefix]",
    prefix_description: "Imposta un prefisso personalizzato al server, Il BOT risponderà al nuovo prefisso e al prefisso `nisd`. \n" +
        "**Potrai ugualmente taggare il bot per vedere il prefisso in questo server**",
    prefix_small_desc: "Cambia il prefisso del bot",
    prefix_examples:
        "`prefix ?`\n" +
        "`prefix n!!`",
    prefix_changed: (prefix) => {
        return `Prefisso del bot cambiato, **Prefisso Nuovo**: \`${prefix}\``
    },
    //mod
    mod_logs: "Logs Moderazione",
    mod_deleteAfter: "Elimina Comando",
    mod_dmUser: "Messaggia Utente",
    mod_use: "mod logs | dms | delete {#Canale/ID/none} {True/False}",
    mod_description:
        "**Modifica le impostazioni riguardante la moderazione**\n" +
        ":small_blue_diamond: `mod logs [#Canale/ID/none]`\n" +
        "Imposta un canale per mostrare le azioni prese dallo staff\n" +
        ":small_blue_diamond: `mod dms [True/False]`\n" +
        "Imposta se mandare o meno un messaggio in privato all'utente ad azione intrapresa\n" +
        ":small_blue_diamond: `mod delete [True/False]`\n" +
        "Imposta se cancellare automaticamente il comando ad azione eseguita",
    mod_small_desc: "Apri le impostazioni della moderazione, usa `mod` per info",
    mod_examples:
        "`mod dms true` \n" +
        "`mod logs none`\n" +
        "`mod logs #Canale`\n" +
        "`mod delete true`",
    //modlogs
    mod_logs_use: "mod logs [#Canale/ID/none]",
    mod_logs_description: "Imposta un canale per mostrare le azioni prese dallo staff\n" +
        "Usa `none` al posto del canale per disabilitare i logs",
    mod_logs_small_desc: "Imposta un canale per mostrare le azioni prese dallo staff",
    mod_logs_examples:
        "`mod logs ID`\n" +
        "`mod logs none`\n" +
        "`mod logs #Canale`",
    mod_logs_channel_saved: (channel) => {
        return `Canale per i logs della moderazione aggiornato, **Nuovo canale**: ${channel}`
    },
    mod_logs_disabled: "Logs della moderazione disattivati!",
    //mod dms
    mod_dms_use: "mod dms [True/False]",
    mod_dms_description: "Imposta se mandare o meno un messaggio in privato all'utente ad azione intrapresa",
    mod_dms_small_desc: "Imposta se mandare o meno un messaggio in privato all'utente ad azione intrapresa",
    mod_dms_examples:
        "`mod dms true`\n" +
        "`mod dms false`",
    mod_dms_true: "Adesso gli utenti verranno avvisati nei DMS",
    mod_dms_false: "Adesso gli utenti non riceveranno piu' avvisi nei DMS",
    //mod delete
    mod_delete_use: "mod delete [True/False]",
    mod_delete_description: "Imposta se cancellare automaticamente il comando ad azione eseguita",
    mod_delete_small_desc: "Imposta se cancellare automaticamente il comando ad azione eseguita",
    mod_delete_examples:
        "`mod delete true`\n" +
        "`mod delete false`",
    mod_delete_true: "Adesso i comandi verranno eliminato ad azione finita",
    mod_delete_false: "Adesso i comandi non verranno eliminato ad azione finita",
    //report
    report_use: "report [Messaggio]",
    report_description: "Segnala qualcosa allo staff del server (minimo 10 caratteri)",
    report_small_desc: "Segnala qualcosa allo staff del server",
    report_examples:
        "`report Polliog ha offeso la mia persona :(`",
    report_min_chars: "Il messaggio deve essere lungo almeno 10 caratteri.",
    report_not_configured: "Nel server non e' configurato nessun canale valido per le segnalazioni.",
    report_sent: "Segnalazione inviata!",
    //poll
    poll_use: "poll \"[Titolo]\" \"[Opzione1]\" \"[Opzione2]\" \"(Opzioni)\"",
    poll_description: "Crea un sondaggio con multiple opzioni, Massimo 9 opzioni",
    poll_small_desc: "Crea un sondaggio con multiple opzioni",
    poll_examples:
        '`poll "Meglio il sushi o la pizza?" "pizza bro" "sushi"`\n',
    poll_max_options: "Puoi usare massimo 9 opzioni",
    //info
    info_bot: "Informazioni sul bot",
    info_use: "info",
    info_cmd_description: "Mostra informazioni sul BOT",
    started: "Avvio",
    version: "Versione",
    //antiflood
    antiflood_use: "antiflood [enable/disable | limit | action | time] {Numero} {Azione}",
    antiflood_description:
        "L'AntiFlood permette di proteggere il server contro le persone che scrivono molti messaggi ripetutamente\n\n" +
        ":small_blue_diamond: `antiflood [enable/disable]`\n" +
        "Abilita o disabilita l'AntiFlood\n" +
        ":small_blue_diamond: `antiflood limit [Limite]`\n" +
        "Imposta il numero massimo di messaggi inviabili nel tempo determinato\n" +
        ":small_blue_diamond: `antiflood action [Ban | Kick | Warn | Mute | none]`\n" +
        "Imposta l'azione che esegue il bot quando rileva del flood\n" +
        ":small_blue_diamond: `antiflood time [Tempo]`\n" +
        "Imposta il tempo **in secondi**, in cui va determinato il flood",
    antiflood_small_desc: "Apri le impostazioni dell'AntiFlood",
    antiflood_examples:
        "`antiflood enable`\n" +
        "`antiflood limit 4`\n" +
        "`antiflood action ban`\n" +
        "`antiflood time 5`",
    //antiflood enable/disable
    antiflood_mode_use: "antiflood [Enable | Disable]",
    antiflood_mode_description: "Abilita o disabilita l'AntiFlood",
    antiflood_mode_small_desc: "Abilita o disabilita l'AntiFlood",
    antiflood_mode_examples:
        "`antiflood enable`\n" +
        "`antiflood disable`",
    antiflood_enabled: "AntiFlood attivato!",
    antiflood_disabled: "AntFlood disattivato!",
    //antiflood limit
    antiflood_limit_use: "antiflood limit [Limite]",
    antiflood_limit_description: "Imposta il numero massimo di messaggi inviabili nel tempo determinato\n" +
        "**Piu' aumenterai il limite, maggiore saranno i messaggi da inviare per farlo attivare**",
    antiflood_limit_small_desc: "Imposta il numero massimo di messaggi inviabili nel tempo determinato",
    antiflood_limit_examples: "`antiflood limit 5`",
    antiflood_limit_min: "Il limite minino per l'AntiFlood e' di 3 messaggi",
    antiflood_limit_updated: (limit) => {
        return `Limite dell'AntiFlood modificato, **Nuovo Limite**: \`${limit}\``
    },
    //antiflood action
    antiflood_action_use: "antiflood action [Ban | Kick | Warn | Mute | none]",
    antiflood_action_description: "Imposta l'azione che esegue il bot quando rileva del flood, usa `none` per non fare nessuna azione (oltre a cancellare i messaggi)",
    antiflood_action_small_desc: "Imposta l'azione che esegue il bot quando rileva del flood",
    antiflood_action_examples:
        "`antiflood action ban`\n" +
        "`antiflood action none`",
    antiflood_action_updated: (action) => {
        return `Azione dell'AntiFlood aggiornata, **Azione**: \`${action}\``
    },
    //antiflood time
    antiflood_time_use: "antiflood time [Secondi]",
    antiflood_time_description: "Imposta il tempo **in secondi**, in cui va determinato il flood",
    antiflood_time_small_desc: "Imposta il tempo in cui va determinato il flood",
    antiflood_time_examples:
        "`antiflood time 4`",
    antiflood_time_min: "Il tempo limite minino per l'AntiFlood e' di 3 secondi",
    antiflood_time_updated: (time) => {
        return `Tempo dell'AntiFlood aggiornato, **Tempo nuovo**: \`${time} Secondi\``
    },
    antiflood_in_action: (member) => {
        return `${member}**, Stai mandando troppi messaggi velocemente!**`
    },
    antiflood_acted: "[NISD AutoMod] L'utente ha inviato troppi messaggi velocemente!",
    //antispam
    antispam_use: "antispam [enable/disable | action] {Azione}",
    antispam_description:
        "L'AntiSpam e' una funzione che cancella automaticamente tutti i messaggi di spam (inviti dei server) nel server\n\n" +
        ":small_blue_diamond: `antispam [enable/disable]`\n" +
        "Abilita o disabilita l'AntiSpam\n" +
        ":small_blue_diamond: `antispam action [Ban | Kick | Warn | Mute | none]`\n" +
        "Imposta l'azione che esegue il bot quando rileva un link spam",
    antispam_small_desc: "Apri le impostazioni dell'AntiSpam",
    antispam_examples:
        "`antispam enable`\n" +
        "`antispam action warn`",
    antispam_in_action: (member) => {
        return `${member}**, Link d'invito rilevato!**`
    },
    antispam_acted: "[NISD AutoMod] Link d'invito rilevato!",
    //antispam action
    antispam_action_use: "antispam action [Ban | Kick | Warn | Mute | none]",
    antispam_action_description: "Imposta l'azione che esegue il bot quando rileva un messaggio di spam, " +
        "usa `none` per non fare nessuna azione (oltre a cancellare il messaggio)",
    antispam_action_small_desc: "Imposta l'azione che esegue il bot se rileva dello spam",
    antispam_action_examples:
        "`antispam action ban`\n" +
        "`antispam action none`",
    //antispam enable/disable
    antispam_enabled: "AntiSpam abilitato!",
    antispam_disabled: "AntiSpam disabled!",
    //antinuke
    antinuke_use: "antinuke [Categoria] [limit | action | enable/disable] {Opzioni}",
    antinuke_description:
        "Per visualizzare le impostazioni attuali usa \`antinuke info\`\n\n" +
        "Modifica le impostazioni dell'AntiNuke, per modificare una impostazione specifica utilizza `antinuke [categoria]`\n" +
        "Se un utente raggiunge il \"limite\" di un azione il bot lo punisce, ogni azione ha una propria punizione\n" +
        "Puoi impostare un limite \"globale\" tramite `antinuke global [numero]`\n\n" +
        ":small_blue_diamond: \`antinuke ban [limit | action | enable/disable] {Opzioni}\`\n" +
        "Modifica il numero di ban prima di far scattare l'AntiNuke del bot\n" +
        ":small_blue_diamond: \`antinuke kick [limit | action | enable/disable] {Opzioni}\`\n" +
        "Modifica il numero di kick prima di far scattare l'AntiNuke del bot\n" +
        ":small_blue_diamond: \`antinuke rolecreate [limit | action | enable/disable] {Opzioni}\`\n" +
        "Modifica il numero di ruoli creati prima di far scattare l'AntiNuke del bot\n" +
        ":small_blue_diamond: \`antinuke roledel [limit | action | enable/disable] {Opzioni}\`\n" +
        "Modifica il numero di ruoli eliminati prima di far scattare l'AntiNuke del bot\n" +
        ":small_blue_diamond: \`antinuke channelcreate [limit | action | enable/disable] {Opzioni}\`\n" +
        "Modifica il numero di canali creati prima di far scattare l'AntiNuke del bot\n" +
        ":small_blue_diamond: \`antinuke channeldel [limit | action | enable/disable] {Opzioni}\`\n" +
        "Modifica il numero di canali eliminati prima di far scattare l'AntiNuke del bot\n" +
        ":small_blue_diamond: \`antinuke global [Numero]\`\n" +
        "Imposta un nuovo limite globale\n" +
        ":small_blue_diamond: \`antinuke info\`\n" +
        "Controlla le attuali impostazioni dell'AntiNuke",
    antinuke_small_desc: "Visualizza tutte le impostazioni dell'AntiNuke",
    antinuke_examples:
        "`antinuke info`\n" +
        "`antinuke global 5`\n" +
        "`antinuke ban enable`\n" +
        "`antinuke kick action ban`\n" +
        "`antinuke rolecreate limit 4`",
    antinuke_warnings: "[ANTINUKE] Attenzione stai superando un limite dell'AntiNuke",
    //antiban
    antiban_use: "antiban [limit | action | enable/disable] {Opzioni}",
    antiban_description:
        "L'AntiBan e' una funzione dell'AntiNuke che agisce sugli utenti che bannano molti membri ripetutamente\n\n" +
        ":small_blue_diamond: \`antiban enable/disable\`\n" +
        "Abilita/Disabilita l'AntiBan\n" +
        ":small_blue_diamond: \`antiban limit [Numero]\`\n" +
        "Modifica il numero di ban necessari a far attivare l'AntiBan\n" +
        ":small_blue_diamond: \`antiban action [Sanzione]\`\n" +
        "Modifica la sanzione dell'AntiBan",
    antiban_small_desc: "Modifica le impostazioni dell'AntiBan dell'AntiNuke",
    antiban_examples:
        "`antiban enable`\n" +
        "`antiban disable`\n" +
        "`antiban limit 5`\n" +
        "`antiban action ban`",
    antiban_enabled: "AntiBan abilitato!",
    antiban_disabled: "AntiBan disabilitato!",
    antiban_acted: "[ANTIBAN] Rilevato un grosso numero di ban eseguiti dall'utente",
    //antiban action
    antiban_action_use: "antiban action [Ban | Kick | Warn | Mute]",
    antiban_action_description:
        "Imposta l'azione che il BOT deve eseguire in caso un utente superi il limite impostato",
    antiban_action_examples:
        "`antiban action ban`",
    antiban_action_updated: (action) => {
        return `Azione dell'AntiBan aggiornata, **Azione**: \`${action}\``
    },
    //antiban limit
    antiban_limit_use: "antiban limit [Numero]",
    antiban_limit_description:
        "Imposta il limite per l'AntiBan dell'AntiNuke",
    antiban_limit_examples:
        "`antiban limit 3`",
    antiban_limit_updated: (limit) => {
        return `Limite dell'AntiBan modificato, **Nuovo Limite**: \`${limit}\``
    },
    //antikick
    antikick_use: "antikick [limit | action | enable/disable] {Opzioni}",
    antikick_description:
        "L'AntiKick e' una funzione dell'AntiNuke che agisce sugli utenti che espellono molti membri ripetutamente\n\n" +
        ":small_blue_diamond: \`antikick enable/disable\`\n" +
        "Abilita/Disabilita l'AntiKick\n" +
        ":small_blue_diamond: \`antikick limit [Numero]\`\n" +
        "Modifica il numero di kick necessari a far attivare l'AntiKick\n" +
        ":small_blue_diamond: \`antikick action [Sanzione]\`\n" +
        "Modifica la sanzione dell'AntiKick",
    antikick_small_desc: "Modifica le impostazioni dell'AntiKick dell'AntiNuke",
    antikick_examples:
        "`antikick enable`\n" +
        "`antikick disable`\n" +
        "`antikick limit 5`\n" +
        "`antikick action ban`",
    antikick_enabled: "AntiKick abilitato!",
    antikick_disabled: "AntiKick disabilitato!",
    antikick_acted: "[ANTIKICK] Rilevato un grosso numero di kicks eseguiti dall'utente",
    //antikick action
    antikick_action_use: "antikick action [Ban | Kick | Warn | Mute]",
    antikick_action_description:
        "Imposta l'azione che il BOT deve eseguire in caso un utente superi il limite impostato",
    antikick_action_examples:
        "`antikick action ban`",
    antikick_action_updated: (action) => {
        return `Azione dell'AntiKick aggiornata, **Azione**: \`${action}\``
    },
    //antikick limit
    antikick_limit_use: "antikick limit [Numero]",
    antikick_limit_description:
        "Imposta il limite per l'AntiKick dell'AntiNuke",
    antikick_limit_examples:
        "`antikick limit 3`",
    antikick_limit_updated: (limit) => {
        return `Limite dell'AntiKick modificato, **Nuovo Limite**: \`${limit}\``
    },
    //antirolecreate
    antirolecreate_use: "antirolecreate [limit | action | enable/disable] {Opzioni}",
    antirolecreate_description:
        "L'AntiRoleCreate e' una funzione dell'AntiNuke che agisce sugli utenti che creano molti ruoli in poco tempo\n\n" +
        ":small_blue_diamond: \`antirolecreate enable/disable\`\n" +
        "Abilita/Disabilita l'AntiRoleCreate\n" +
        ":small_blue_diamond: \`antirolecreate limit [Numero]\`\n" +
        "Modifica il numero di ruoli creati necessari a far attivare l'AntiRoleCreate\n" +
        ":small_blue_diamond: \`antirolecreate action [Sanzione]\`\n" +
        "Modifica la sanzione dell'AntiRoleCreate",
    antirolecreate_small_desc: "Modifica le impostazioni dell'AntiRoleCreate dell'AntiNuke",
    antirolecreate_examples:
        "`antirolecreate enable`\n" +
        "`antirolecreate disable`\n" +
        "`antirolecreate limit 5`\n" +
        "`antirolecreate action ban`",
    antirolecreate_enabled: "AntiRoleCreate abilitato!",
    antirolecreate_disabled: "AntiRoleCreate disabilitato!",
    antirolecreate_acted: "[ANTIROLECREATE] Rilevato un grosso numero di ruoli creati dall'utente",
    //antirolecreate action
    antirolecreate_action_use: "antirolecreate action [Ban | Kick | Warn | Mute]",
    antirolecreate_action_description:
        "Imposta l'azione che il BOT deve eseguire in caso un utente superi il limite impostato",
    antirolecreate_action_examples:
        "`antirolecreate action ban`",
    antirolecreate_action_updated: (action) => {
        return `Azione dell'AntiRoleCreate aggiornata, **Azione**: \`${action}\``
    },
    //antirolecreate limit
    antirolecreate_limit_use: "antirolecreate limit [Numero]",
    antirolecreate_limit_description:
        "Imposta il limite per l'AntiRoleCreate dell'AntiNuke",
    antirolecreate_limit_examples:
        "`antirolecreate limit 3`",
    antirolecreate_limit_updated: (limit) => {
        return `Limite dell'AntiRoleCreate modificato, **Nuovo Limite**: \`${limit}\``
    },
    //antiroledelete
    antiroledelete_use: "antiroledelete [limit | action | enable/disable] {Opzioni}",
    antiroledelete_description:
        "L'AntiRoleDelete e' una funzione dell'AntiNuke che agisce sugli utenti che eliminano molti ruoli in poco tempo\n\n" +
        ":small_blue_diamond: \`antiroledelete enable/disable\`\n" +
        "Abilita/Disabilita l'AntiRoleDelete\n" +
        ":small_blue_diamond: \`antiroledelete limit [Numero]\`\n" +
        "Modifica il numero di ruoli eliminati necessari a far attivare l'AntiRoleDelete\n" +
        ":small_blue_diamond: \`antiroledelete action [Sanzione]\`\n" +
        "Modifica la sanzione dell'AntiRoleDelete",
    antiroledelete_small_desc: "Modifica le impostazioni dell'AntiRoleDelete dell'AntiNuke",
    antiroledelete_examples:
        "`antiroledelete enable`\n" +
        "`antiroledelete disable`\n" +
        "`antiroledelete limit 5`\n" +
        "`antiroledelete action ban`",
    antiroledelete_enabled: "AntiRoleDelete abilitato!",
    antiroledelete_disabled: "AntiRoleDelete disabilitato!",
    antiroledelete_acted: "[ANTIROLEDELETE] Rilevato un grosso numero di ruoli eliminati dall'utente",
    //antiroledelete action
    antiroledelete_action_use: "antiroledelete action [Ban | Kick | Warn | Mute]",
    antiroledelete_action_description:
        "Imposta l'azione che il BOT deve eseguire in caso un utente superi il limite impostato",
    antiroledelete_action_examples:
        "`antiroledelete action ban`",
    antiroledelete_action_updated: (action) => {
        return `Azione dell'AntiRoleDelete aggiornata, **Azione**: \`${action}\``
    },
    //antiroledelete limit
    antiroledelete_limit_use: "antiroledelete limit [Numero]",
    antiroledelete_limit_description:
        "Imposta il limite per l'AntiRoleDelete dell'AntiNuke",
    antiroledelete_limit_examples:
        "`antiroledelete limit 3`",
    antiroledelete_limit_updated: (limit) => {
        return `Limite dell'AntiRoleDelete modificato, **Nuovo Limite**: \`${limit}\``
    },
    //antichannelcreate
    antichannelcreate_use: "antichannelcreate [limit | action | enable/disable] {Opzioni}",
    antichannelcreate_description:
        "L'AntiChannelCreate e' una funzione dell'AntiNuke che agisce sugli utenti che creano molti canali in poco tempo\n\n" +
        ":small_blue_diamond: \`antichannelcreate enable/disable\`\n" +
        "Abilita/Disabilita l'AntiChannelCreate\n" +
        ":small_blue_diamond: \`antichannelcreate limit [Numero]\`\n" +
        "Modifica il numero di canali creati necessari a far attivare l'AntiChannelCreate\n" +
        ":small_blue_diamond: \`antichannelcreate action [Sanzione]\`\n" +
        "Modifica la sanzione dell'AntiChannelCreate",
    antichannelcreate_small_desc: "Modifica le impostazioni dell'AntiChannelCreate dell'AntiNuke",
    antichannelcreate_examples:
        "`antichannelcreate enable`\n" +
        "`antichannelcreate disable`\n" +
        "`antichannelcreate limit 5`\n" +
        "`antichannelcreate action ban`",
    antichannelcreate_enabled: "AntiChannelCreate abilitato!",
    antichannelcreate_disabled: "AntiChannelCreate disabilitato!",
    antichannelcreate_acted: "[ANTICHANNELCREATE] Rilevato un grosso numero di canali creati dall'utente",
    //antichannelcreate action
    antichannelcreate_action_use: "antichannelcreate action [Ban | Kick | Warn | Mute]",
    antichannelcreate_action_description:
        "Imposta l'azione che il BOT deve eseguire in caso un utente superi il limite impostato",
    antichannelcreate_action_examples:
        "`antichannelcreate action ban`",
    antichannelcreate_action_updated: (action) => {
        return `Azione dell'AntiChannelCreate aggiornata, **Azione**: \`${action}\``
    },
    //antichannelcreate limit
    antichannelcreate_limit_use: "antichannelcreate limit [Numero]",
    antichannelcreate_limit_description: "Imposta il limite per l'AntiChannelCreate dell'AntiNuke",
    antichannelcreate_limit_examples:
        "`antichannelcreate limit 3`",
    antichannelcreate_limit_updated: (limit) => {
        return `Limite dell'AntiChannelCreate modificato, **Nuovo Limite**: \`${limit}\``
    },
    //antichanneldelete
    antichanneldelete_use: "antichanneldelete [limit | action | enable/disable] {Opzioni}",
    antichanneldelete_description:
        "L'AntiChannelDelete e' una funzione dell'AntiNuke che agisce sugli utenti che eliminano molti canali in poco tempo\n\n" +
        ":small_blue_diamond: \`antichanneldelete enable/disable\`\n" +
        "Abilita/Disabilita l'AntiChannelDelete\n" +
        ":small_blue_diamond: \`antichanneldelete limit [Numero]\`\n" +
        "Modifica il numero di canali eliminati necessari a far attivare l'AntiChannelDelete\n" +
        ":small_blue_diamond: \`antichanneldelete action [Sanzione]\`\n" +
        "Modifica la sanzione dell'AntiChannelDelete",
    antichanneldelete_small_desc: "Modifica le impostazioni dell'AntiChannelDelete dell'AntiNuke",
    antichanneldelete_examples:
        "`antichanneldelete enable`\n" +
        "`antichanneldelete disable`\n" +
        "`antichanneldelete limit 5`\n" +
        "`antichanneldelete action ban`",
    antichanneldelete_enabled: "AntiChannelDelete abilitato!",
    antichanneldelete_disabled: "AntiChannelDelete disabilitato!",
    antichanneldelete_acted: "[ANTICHANNELDELETE] Rilevato un grosso numero di canali eliminati dall'utente",
    //antichanneldelete action
    antichanneldelete_action_use: "antichanneldelete action [Ban | Kick | Warn | Mute]",
    antichanneldelete_action_description:
        "Imposta l'azione che il BOT deve eseguire in caso un utente superi il limite impostato",
    antichanneldelete_action_examples:
        "`antichanneldelete action ban`",
    antichanneldelete_action_updated: (action) => {
        return `Azione dell'AntiChannelDelete aggiornata, **Azione**: \`${action}\``
    },
    //antichanneldelete limit
    antichanneldelete_limit_use: "antichanneldelete limit [Numero]",
    antichanneldelete_limit_description: "Imposta il limite per l'AntiChannelDelete dell'AntiNuke",
    antichanneldelete_limit_examples:
        "`antichanneldelete limit 3`",
    antichanneldelete_limit_updated: (limit) => {
        return `Limite dell'AntiChannelDelete modificato, **Nuovo Limite**: \`${limit}\``
    },
    //antinuke global
    antinukeglobal_use: "antinuke global [Numero]",
    antinukeglobal_description:
        "**Imposta il limite globale dell'AntiNuke**\n" +
        "Per limite globale si intende la somma di tutte le azioni commesse dall'utente e registrate dall'AntiNuke del BOT negli ultimi ±30 secondi.\n" +
        "**Il BOT terra' conto solo delle azioni di funzioni attivate, per vedere che funzioni dell'AntiNuke sono attivate utilizza `antinuke info`**",
    antinukeglobal_small_desc: "Imposta il limite globale dell'AntiNuke",
    antinukeglobal_examples:
        "`antinuke global 10`",
    antinukeglobal_updated: (limit) => {
        return `Limite globale dell'AntiNuke modificato, **Nuovo Limite**: \`${limit}\``
    },
    antinukeglobal_warnings: "[ANTINUKE] Attenzione stai superando il limite globale dell'AntiNuke",
    //antinuke info
    antinuke_info_title: "Impostazioni AntiNuke",
    antinuke_info_description:
        "In questo pannello sono mostrate tutte le attuali impostazioni dell'AntiNuke, " +
        "puoi modificare le varie impostazioni utilizzando `antinuke [Sezione]` oppure tramite comandi singoli `antiban {...}`",
    antinuke_info_global_title: "Limite Globale",
    //antiraid
    antiraid_use: "antiraid [limit | action | enable/disable | time] {Opzioni}",
    antiraid_description:
        "L'AntiRaid permette di proteggere il server dall'ingresso di molti utenti in breve tempo\n\n" +
        ":small_blue_diamond: \`antiraid enable/disable\`\n" +
        "Abilita/Disabilita l'AntiRaid\n" +
        ":small_blue_diamond: \`antiraid limit [Numero]\`\n" +
        "Modifica il numero di utenti entrati entro un determinato tempo necessari a far attivare l'AntiRaid\n" +
        ":small_blue_diamond: `antiraid time [Tempo]`\n" +
        "Imposta il tempo **in secondi**, in cui va determinato il raid \n" +
        ":small_blue_diamond: \`antiraid action [Sanzione]\`\n" +
        "Modifica la sanzione dell'AntiRaid",
    antiraid_small_desc: "Modifica le impostazioni dell'AntiRaid",
    antiraid_examples:
        "`antiraid enable`\n" +
        "`antiraid disable`\n" +
        "`antiraid time 6`\n" +
        "`antiraid limit 5`\n" +
        "`antiraid action ban`",
    antiraid_enabled: "AntiRaid abilitato!",
    antiraid_disabled: "AntiRaid disabilitato!",
    antiraid_acted: "[ANTIRAID] Rilevato un grosso numero di utenti entrati contemporaneamente",
    //antiraid limit
    antiraid_limit_use: "antiraid limit [Limite]",
    antiraid_limit_description: "Imposta il numero massimo di utenti entrati nel tempo determinato\n" +
        "**Piu' aumenterai il limite, maggiore saranno gli utenti entrati per farlo attivare**",
    antiraid_limit_small_desc: "Imposta il numero massimo di utenti entrati nel tempo determinato",
    antiraid_limit_examples: "`antiraid limit 5`",
    antiraid_limit_min: "Il limite minino per l'AntiRaid e' di 3 utenti",
    antiraid_limit_updated: (limit) => {
        return `Limite dell'AntiRaid modificato, **Nuovo Limite**: \`${limit}\``
    },
    //antiraid action
    antiraid_action_use: "antiraid action [Ban | Kick | Warn | Mute]",
    antiraid_action_description: "Imposta l'azione che esegue il bot quando rileva un raid",
    antiraid_action_small_desc: "Imposta l'azione che esegue il bot quando rileva un raid",
    antiraid_action_examples:
        "`antiraid action ban`\n" +
        "`antiraid action none`",
    antiraid_action_updated: (action) => {
        return `Azione dell'AntiRaid aggiornata, **Azione**: \`${action}\``
    },
    //antiraid time
    antiraid_time_use: "antiraid time [Secondi]",
    antiraid_time_description: "Imposta il tempo **in secondi**, in cui va determinato il raid",
    antiraid_time_small_desc: "Imposta il tempo in cui va determinato il raid",
    antiraid_time_examples:
        "`antiraid time 4`",
    antiraid_time_min: "Il tempo limite minino per l'AntiRaid e' di 3 secondi",
    antiraid_time_updated: (time) => {
        return `Tempo dell'AntiRaid aggiornato, **Tempo nuovo**: \`${time} Secondi\``
    },
    //autoaction
    autoaction_use: "autoaction [add | remove | list] {Opzioni}",
    autoaction_description:
        "Imposta un'azione da eseguire quando un utente raggiunge un determinato numero di warns\n\n" +
        ":small_blue_diamond: `autoaction add [numero] [ban | kick | mute] {tempo}`\n" +
        "Aggiungi un azione che eseguirà il bot al numero impostato di warns\n" +
        ":small_blue_diamond: `autoaction remove [numero]`\n" +
        "Rimuovi un azione dell'autoAction\n" +
        ":small_blue_diamond: `autoaction list`\n" +
        "Mostra le azioni che eseguirà il bot a determinati numeri di warns",
    autoaction_small_desc: "Modifica le azioni automatiche del bot a determinati warns",
    autoaction_examples:
        "`autoaction list`\n" +
        "`autoaction remove 2`\n" +
        "`autoaction add 3 kick`\n" +
        "`autoaction add 5 ban 2d`",
    //autoaction add
    autoaction_add_use: "autoaction add [numero] [ban | kick | mute] {tempo}",
    autoaction_add_description:
        "**Azioni Disponibili**:\n" +
        "`ban (Tempo)` = Bandisce l'utente dal server, tempo facoltativo\n" +
        "`kick` = Espelle l'utente dal server\n" +
        "`mute (Tempo)` = Muta l'utente, tempo facoltativo\n" +
        "**Nota**: va selezionato un ruolo per il mute tramite `setmuterole [Ruolo]`",
    autoaction_add_examples:
        "`autoaction add 5 mute 12h`",
    autoaction_already_exists: (number) => {
        return `Esiste gia' un altro provvedimento impostato per \`${number}\` warns. Controlla gli altri provvedimenti tramite il comando \`autoaction list\``
    },
    autoaction_added: (number, action, time) => {
        let real_action


        switch (action) {
            case 'ban':
                real_action = 'bannato'
                break
            case 'kick':
                real_action = 'espulso'
                break
            case 'mute':
                real_action = 'mutato'
                break
            default:
                real_action = "?"
                break
        }

        let send = `Impostazioni aggiornate, da ora raggiunti i \`${number}\` warns, l'utente verra' ${real_action}`

        if (time !== null) {
            send = send + ' temporaneamente'
        }

        return send
    },
    //autoaction remove
    autoaction_remove_use: "autoaction remove [Numero]",
    autoaction_remove_description: "Rimuovi un azione automatica",
    autoaction_remove_examples:
        "`autoaction remove 3`",
    autoaction_dont_exists: (number) => {
        return `Non esiste nessun provvedimento impostato per \`${number}\` warns. Controlla gli provvedimenti tramite il comando \`autoaction list\``
    },
    autoaction_removed: "Provvedimento rimosso",
    //autoaction list
    autoaction_list_description: "**Provvedimenti Impostati**:",
    autoaction_list_null: "Nessun provvedimento impostato :(",
    //autoaction reasons
    autoaction_reason: "[AUTOACTION] Raggiunti i warns prestabiliti",
    //autodelwarn
    autodelwarn_use: "autodelwarn [enable/disable | Set] {Tempo}",
    autodelwarn_description:
        "Questa funzione permette di eliminare i warns dopo un tempo determinato\n" +
        ":small_blue_diamond: `autodelwarn enable/disable`\n" +
        "Abilita/Disabilita la cancellazione automatica dei warn\n" +
        ":small_blue_diamond: `autodelwarn set [Tempo]\n`" +
        "Imposta il tempo dopo il quale i warn verranno automaticamente cancellati",
    autodelwarn_small_desc: "Imposta la cancellazione automatica dei warns",
    autodelwarn_examples:
        "`autodelwarn enable`\n" +
        "`autodelwarn set 1M`",
    autodelwarn_enabled: "AutoDelWarn abilitato!",
    autodelwarn_disabled: "AutoDelWarn disabilitato!",
    //autodelwarn set
    autodelwarn_set_use: "autodelwarn set [Tempo]",
    autodelwarn_set_description: "Imposta il tempo dopo il quale i warn verranno automaticamente cancellati",
    autodelwarn_set_examples:
        "`autodelwarn set 1m`",
    autodelwarn_set_updated: (time) => {
        return `Tempo dell'AutoDelWarn aggiornato, **Tempo nuovo**: \`${time}\``
    },
    //blacklist
    blacklist_use: "blacklist [enable/disable | add/remove | action | list] {Opzioni}",
    blacklist_description:
        "La blacklist e' una lista di parole vietate che verranno automaticamente eliminate, anche se comprese nelle frasi, **Il bot tenterà di rilevare anche frasi/parole simili (con caratteri speciali o poco diversi)**\n\n" +
        ":small_blue_diamond: `blacklist enable/disable`\n" +
        "Abilita/Disabilita la blacklist nel server\n" +
        ":small_blue_diamond: `blacklist add/remove [Parola/Frase]`" +
        "Aggiungi/Rimuovi una parola o frase dalla BlackList\n" +
        ":small_blue_diamond: `blacklist action [Azione]`\n" +
        "Modifica l'azione intrapresa dal bot quando rileva una parola/frase vietata, utilizzare come azione **none** per non eseguire un'azione nei confronti dell'utente (oltre a cancellare il messaggio)\n" +
        ":small_blue_diamond: `blacklist list`\n" +
        "Visualizza l'attuale lista di parole e frasi vietate",
    blacklist_small_desc: "Apri le impostazioni della blacklist",
    blacklist_examples:
        "\`blacklist enable\`\n" +
        "\`blacklist add \"parola\"\`\n" +
        "\`blacklist add \"una frase\" \`\n" +
        "\`blacklist remove parola\`\n" +
        "\`blacklist action ban\`\n" +
        "\`blacklist list\`",
    blacklist_enabled: "BlackList abilitata!",
    blacklist_disabled: "BlackList disabled!",
    blacklist_add_remove_use: "blacklist add/remove [Parola/Frase]",
    blacklist_add_remove_description: "Aggiungi/Rimuovi una parola o frase dalla BlackList, utilizza `blacklist list` per visualizzare le parole/frasi vietate",
    blacklist_add_remove_examples:
        "\`blacklist add \"parola\"\`\n" +
        "\`blacklist add \"una frase\"\`\n" +
        "\`blacklist remove \"parola\"\`\n" +
        "\`blacklist remove \"una frase\"\`\n",
    blacklist_word_already_added: "La parola/frase inserita e' gia' nella blacklist",
    blacklist_word_not: "La parola/frase inserita non e' presente nella blacklist",
    blacklisted_word_added: (word) => {
        return `BlackList aggiornata, **Aggiunto**: \`${word}\``
    },
    blacklisted_word_removed: (word) => {
        return `BlackList aggiornata, **Rimosso**: \`${word}\``
    },
    blacklisted_words: "Parole Vietate",
    blacklist_list_clear: "Nessuna parola vietata :(",
    blacklist_acted: "[NISD AUTOMOD] Parola vietata rilevata!",
    blacklist_in_action: (member) => {
        return `${member}**, Parola vietata rilevata!**`
    },
    blacklist_action_use: "blacklist action [Ban | Kick | Warn | Mute | None]",
    blacklist_action_description:
        "Imposta l'azione che il BOT deve eseguire in caso un utente invia un messaggio contenente" +
        " una parola non ammessa, usa **none** per non eseguire nessuna azione (oltre ad eliminare il messaggio)",
    blacklist_action_examples:
        "`blacklist action ban`",
    blacklist_action_updated: (action) => {
        return `Azione della BlackList aggiornata, **Azione**: \`${action}\``
    },
    blacklist_action_removed: "Azione della BlackList rimossa",
    //bypassrole
    bypassrole_use: "bypassrole [add / remove | list] {@Ruolo/ID}",
    bypassrole_description:
        "Crea una lista di ruoli \"ignorati\" dall'AutoMod\n\n" +
        ":small_blue_diamond: \`bypassrole add/remove [@Ruolo/ID]\`\n" +
        "Aggiungi/Rimuovi un ruolo da far \"ignorare\" dall'AutoMod\n" +
        ":small_blue_diamond: \`bypassrole list\`\n" +
        "Mostra la lista di tutti i ruoli \"ignorati\" dall'AutoMod",
    bypassrole_small_desc: "Imposta dei ruoli da far ignorare all'AutoMod",
    bypassrole_examples:
        "\`bypassrole add @ruolo\`\n" +
        "\`bypassrole remove id\`\n" +
        "\`bypassrole list\`",
    //bypassrole add/remove
    bypassrole_add_remove_use: "bypassrole add/remove [@Ruolo/ID]",
    bypassrole_add_remove_description: "Aggiungi/Rimuovi un ruolo da far \"ignorare\" dall'AutoMod",
    bypassrole_add_remove_examples:
        "\`bypassrole add @ruolo\`\n" +
        "\`bypassrole remove id\`\n",
    bypassrole_role_already: "Il ruolo selezionato e' gia' ignorato",
    bypassrole_role_not: "Il ruolo selezionato non e' nella lista dei ruoli ignorati",
    bypassrole_role_added: (role) => {
        return `Ruolo aggiunto, **Ruolo**: ${role}`
    },
    bypassrole_role_removed: (role) => {
        return `Ruolo rimosso, **Ruolo**: ${role}`
    },
    bypassrole_ignored_roles: "Ruoli ignorati",
    bypassrole_clear: "Nessun ruolo ignorato",
    //bypasschannel
    bypasschannel_use: "bypasschannel [add/remove | list] {#Canale/ID}",
    bypasschannel_description:
        "Crea una lista di canali ignorati dall'AutoMod del bot\n\n" +
        ":small_blue_diamond: \`bypasschannel add/remove [#Canale/ID]\`\n" +
        "Aggiungi/Rimuovi un canale dalla lista dei canali ignorati\n" +
        ":small_blue_diamond:\`bypasschannel list\`\n" +
        "Mostra la lista dei canali ignorati",
    bypasschannel_small_desc: "Imposta dei canali da far ignorare all'AutoMod",
    bypasschannel_examples:
        "\`bypasschannel add #canale\`\n" +
        "\`bypasschannel remove id\`\n" +
        "\`bypasschannel list\`",
    //bypasschannel add/remove
    bypasschannel_add_remove_use: "bypasschannel add/remove [@Ruolo/ID]",
    bypasschannel_add_remove_description: "Aggiungi/Rimuovi un canale da far \"ignorare\" dall'AutoMod",
    bypasschannel_add_remove_examples:
        "\`bypasschannel add #canale\`\n" +
        "\`bypasschannel remove id\`\n",
    bypasschannel_channel_already: "Il canale selezionato e' gia' ignorato",
    bypasschannel_channel_not: "Il canale selezionato non e' nella lista dei canali ignorati",
    bypasschannel_channel_added: (channel) => {
        return `Canale aggiunto, **Canale**: ${channel}`
    },
    bypasschannel_channel_removed: (channel) => {
        return `Canale rimosso, **Canale**: ${channel}`
    },
    bypasschannel_ignored_channels: "Canali ignorati",
    bypasschannel_clear: "Nessun canale ignorato",
    //Captcha
    captcha_use: "captcha [Categoria] {Opzioni}",
    captcha_description:
        "La verifica tramite Captcha permette di inviare un codice in privato all'utente che per essere verificato dovrà riscriverlo.\n" +
        "Ognuno dei comandi qui sotto contiene una pagina di help a se dove sono contenute maggiori informazioni\n" +
        "**Per funzionare, la verifica necessita di un ruolo da assegnare ed e' consigliato impostare un canale per i log.**\n\n" +
        ":small_blue_diamond: `captcha enable/disable`\n" +
        "Abilita/Disabilita la verifica tramite captcha\n" +
        ":small_blue_diamond: `captcha mode [fake | new | all]`\n" +
        "Imposta su quali utenti eseguire gli utenti\n" +
        ":small_blue_diamond: `captcha role [@Ruolo/ID]`\n" +
        "Seleziona un ruolo da aggiungere all'utente a verifica completa\n" +
        ":small_blue_diamond: `captcha action [ban | kick | mute | none]`\n" +
        "Seleziona un provvedimento da far eseguire al bot nei confronti di un utente che fallisce la verifica\n" +
        ":small_blue_diamond: `captcha time [minuti]`\n" +
        "Imposta quanti minuti ha un utente per inserire il codice\n" +
        ":small_blue_diamond: `captcha bypass [@Membro/ID]`\n" +
        "Fai saltare la verifica ad un utente\n" +
        ":small_blue_diamond: `captcha resend [@Membro/ID]`\n" +
        "Fai rifare la verifica ad un utente\n" +
        ":small_blue_diamond: `captcha log-channel [#Canale/ID | None]`\n" +
        "Seleziona un canale dove ricevere tutte le informazioni sulle verifiche\n" +
        ":small_blue_diamond: `captcha toggle-role [@Ruolo/ID | None]`\n" +
        "Seleziona un ruolo da rimuovere una volta che l'utente si verifica\n" +
        ":small_blue_diamond: `captcha info`\n" +
        "Mostra l'attuale configurazione della verifica tramite captcha",
    captcha_examples: "A causa del grosso numero di comandi, tutti gli esempi sono presenti nelle varie categorie^^",
    captcha_small_desc: "Configura la verifica tramite captcha",
    //captcha
    captcha_enabled: "Verifica tramite captcha abilitata",
    captcha_disabled: "Verifica tramite captcha disabilitata",
    //captcha mode
    captcha_mode_use: "captcha mode [fake | new | all]",
    captcha_mode_description: "Imposta su quali utenti eseguire la verifica tramite le modalità pre-create elencate:\n" +
        "`fake` = Esegui la verifica a gli utenti con un account d'eta minore alle \`2-3 ore\`\n" +
        "`new` = Esegui la verifica a gli utenti che si sono registrati ultimamente a Discord \`~15 giorni\`\n" +
        "`all` = Fai eseguire la verifica a \`tutti gli utenti\`\n\n" +
        "**Ovviamente, se gli utenti non rientrano nella fascia di tempo della modalità essi verranno automaticamente verificati**",
    captcha_mode_examples: "\`captcha mode all\`",
    captcha_mode_updated: (mode) => {
        return `Modalità della verifica tramite captcha cambiata, **Modalità**: \`${mode}\``
    },
    //captcha role
    captcha_role_use: "captcha role [@Ruolo/ID]",
    captcha_role_description: "Aggiungi il ruolo da far aggiungere all'utente a verifica completa",
    captcha_role_examples:
        "\`captcha role 123456789\`\n" +
        "\`captcha role @ruolo\`",
    captcha_role_updated: (role) => {
        return `Ruolo della verifica aggiornato, **Ruolo**: ${role}`
    },
    //captcha action
    captcha_action_use: "captcha action [Ban | Kick | Warn | Mute | None]",
    captcha_action_description:
        "Imposta l'azione che il BOT deve eseguire in caso di fallimento nella verifica",
    captcha_action_examples:
        "`captcha action ban`",
    captcha_action_updated: (action) => {
        return `Azione della verifica captcha aggiornata, **Azione**: \`${action}\``
    },
    captcha_action_removed: "Azione della verifica captcha rimossa",
    //captcha time
    captcha_time_use: "captcha time [minuti]",
    captcha_time_description: "Imposta in quanti minuti l'utente deve eseguire la verifica **PER TENTATIVO**, **max 60 minuti**",
    captcha_time_examples: "`captcha time 15`",
    captcha_time_updated: (time) => {
        return `Minutaggio del captcha aggiornato, **Tempo**: \`${time} minuti\``
    },
    captcha_time_invalid_time: "Il numero da inserire deve essere compreso tra 1 e 60",
    //captcha log-channel
    captcha_logchannel_use: "captcha log-channel [#Canale/ID | None]",
    captcha_logchannel_description: "Imposta un canale dove far inviare tutti i logs della verifica tramite captcha, usa **none** per rimuovere il canale",
    captcha_logchannel_examples: "`captcha log-channel #canale`\n`captcha log-channel 133243243525324`\n`captcha log-channel none`",
    captcha_logchannel_updated: (channel) => {
        if (channel === null) {
            return "Canale dei logs disabilitato"
        } else {
            return `Canale per i logs del captcha impostato, **Canale**: ${channel}`
        }
    },
    //captcha toggle-role
    captcha_togglerole_use: "captcha toggle-role [@Ruolo/ID | None]",
    captcha_togglerole_description: "Seleziona un ruolo da rimuovere una volta che l'utente si verifica, usa **none** per disabilitare questa funzione",
    captcha_togglerole_examples: "`captcha toggle-role @ruolo`\n`captcha toggle-role none`\n`captcha toggle-role 12321432432545`",
    captcha_togglerole_updated(role) {
        if (role === null) {
            return "Ruolo da rimuovere disabilitato"
        } else {
            return `Ruolo da rimuovere a verifica eseguita impostato, **Ruolo**: ${role}`
        }
    },
    //CAPTCHA EMBEDS
    captcha_embed_title: "Verifica Richiesta",
    captcha_embed_retry_title: "Verifica fallita, riprova",
    captcha_embed_failed_title: "Verifica fallita",
    captcha_embed_impossible_title: "Verifica Impossibile",
    captcha_embed_stopped_title: "Verifica Annullata",
    captcha_embed_auto_title: "Verifica Automatica",
    captcha_embed_auto_started_title: "Verifica Automatica Iniziata",
    captcha_embed_started_title: "Verifica Iniziata",
    captcha_embed_completed_title: "Verifica Eseguita",
    captcha_embed_error_title: "Errore durante la verifica",
    captcha_acted: "Verifica tramite Captcha fallita",
    captcha_embed_bypass_title: "Verifica Bypassata",
    autocaptcha_embed_impossible_title: "Verifica automatica, impossibile",
    captcha_embed_description: (minutes, tries) => {
        return `**Per accedere al server e' necessario inviare il codice sottostante in questa chat**\n` +
            `**Tempo per inviare il codice**: \`${minutes} Minuti\`\n` +
            `**Tentativi rimanenti**: \`${tries}\`\n\n` +
            `**Codice da inviare**:`
    },
    captcha_embed_retry_description: (mode) => {
        if (mode === "time") {
            return "Tempo scaduto"
        } else if (mode === "fail") {
            return "Codice errato"
        } else if (mode === "tries") {
            return "Tentativi terminati"
        }
    },
    captcha_embed_stopped_description: (member) => {
        return `L'utente ${member.user.username}#${member.user.discriminator} || \`${member.user.id}\` e' uscito dal server, di conseguenza la sua verifica e' stata annullata`
    },
    captcha_embed_started_description: (member) => {
        return `L'utente ${member.user.username}#${member.user.discriminator} || \`${member.user.id}\` ha iniziato la verifica`
    },
    captcha_embed_auto_description_user: "E' stato rilevato che gia' possiedi il ruolo nel server, per tanto sei stato verificato automaticamente",
    captcha_embed_auto_description: (member) => {
        return `L'utente ${member.user.username}#${member.user.discriminator} || \`${member.user.id}\` e' stato automaticamente verificato, in quanto aveva il ruolo da aggiungere`
    },
    captcha_embed_completed_description_user: "Verifica eseguita con successo, a breve riceverai il ruolo",
    captcha_embed_completed_description: (member) => {
        return `L'utente ${member.user.username}#${member.user.discriminator} || \`${member.user.id}\` si e' verificato con successo`
    },
    captcha_embed_failed_description: (member) => {
        return `L'utente ${member.user.username}#${member.user.discriminator} || \`${member.user.id}\` ha fallito la verifica`
    },
    captcha_embed_auto_started_description: (member) => {
        return `L'utente ${member.user.username}#${member.user.discriminator} || \`${member.user.id}\` non rientra nella fascia d'azione della verifica, verifica bypassata`
    },
    captcha_embed_bypass_description: (user, bypassMember) => {
        return `L'utente ${user.username}#${user.discriminator} || \`${user.id}\` ha bypassato la verifica di L'utente ${bypassMember.user.username}#${bypassMember.user.discriminator} || \`${bypassMember.user.id}\``
    },
    //CAPTCHA ERRORS
    captcha_owner_error: (member, error) => {
        return `Sembrerebbe esserci stato un errore durante la verifica dell'utente \`${member.user.username}#${member.user.discriminator} || ${member.user.id}\`\n\n` +
            `**Errore**: \`${error}\`\n\n` +
            `*E' consigliabile impostare un canale per i log del captcha se non si vuole piu' ricevere questi messaggi*`
    },
    captcha_error_invalid_role: "Il ruolo da assegnare a verifica completa e' mancante/non valido",
    captcha_error_invalid_togglerole: "Il ruolo da rimuovere a verifica completa e' mancante/non valido",
    captcha_error_invalid_permissions: "Il bot non puo' eseguire la verifica in quanto non ha i permessi necessari",
    captcha_error_dm_blocked: (member) => {
        return `L'utente \`${member.user.username}#${member.user.discriminator} || ${member.user.id}\` ha i DM bloccati, quindi non posso eseguire la verifica`
    },
    captcha_error_user: "Non posso eseguire la verifica per un problema di configurazione",
    //CAPTCHA BYPASS
    captcha_bypass_use: "captcha bypass [@Utente/ID]",
    captcha_bypass_description: "Fai saltare la verifica ad un utente",
    captcha_bypass_examples:
        "\`captcha bypass @Polliog\`\n" +
        "\`captcha bypass 173569203977060353\`",
    captcha_bypassed_cmd: "L'utente e' stato verificato correttamente",
    //CAPTCHA RESEND
    captcha_resend_use: "captcha resend [@Utente/ID]",
    captcha_resend_description: "Fai rifare la verifica ad un utente",
    captcha_resend_examples:
        "\`captcha resend @Polliog\`\n" +
        "\`captcha resend 173569203977060353\`",
    captcha_resend_cmd: "Verifica iniziata con successo",
    //TICKETS
    //TICKETS INTERNAL
    ticketsInt_opened: "Ticket Aperto",
    ticketsInt_openedInChannel: (channel) => `Ticket aperto nel canale ${channel}`,
    ticketsInt_openedby: (member) => `Ticket aperto da ${member}`,
    ticketsInt_panel: "Panel",
    ticketsInt_ticket: "Ticket",
    ticketsInt_close: "Chiudi",
    ticketsInt_closed: "Chiuso",
    ticketsInt_closedPhrase: "Ticket Chiuso",
    ticketsInt_closedby: (member) => `Ticket chiuso da ${member}`,
    ticketsInt_closedOptions: "📝 : Trascrivi il ticket\n\n🗑️ : Elimina il ticket\n\n🔁    : Riapri il ticket",
    ticketsInt_transcriptSavedTitle: "Trascrizione Salvata",
    ticketsInt_transcriptSavedDescriptionChannel: (channel) => `Trascrizione inviata nel canale ${channel}`,
    ticketsInt_transcriptSavedDescriptionUser: (user) => `Trascrizione salvata da ${user}`,
    ticketsInt_delete_ask: "Vuoi davvero eliminare questo ticket?",
    ticketsInt_deleted_logs: "Ticket Eliminato",
    //TICKETS COMMANDS
    tickets_use: "tickets [Categoria] {Opzioni}",
    tickets_description:
        "I Tickets permetto di gestire in maniera piu' ordinata delle richieste da parte dell'utenza, creando un ticket tramite l'apposito comando" +
        "si creerà un `panel` (messaggio con sotto un bottone) dal quale interagendosi si crea un ticket privato.\n" +
        "**I ticket prendono i permessi dalla categoria in cui vengono creati**\n\n" +
        ":small_blue_diamond: `ticket create`\n" +
        "Avvia la creazione del pannello dal quale creare i tickets\n" +
        ":small_blue_diamond: `ticket panel [panelID]`\n" +
        "Ricrea un pannello gia' creato in precedenza\n" +
        ":small_blue_diamond: `ticket edit [panelID]`\n" +
        "Modifica le impostazioni di un panel\n" +
        ":small_blue_diamond: `ticket delete [panelID]`\n" +
        "Cancella definitivamente un panel\n" +
        ":small_blue_diamond: `ticket logs [#Canale/ID | None]`\n" +
        "Imposta un canale per i logs dei ticket, inserisci `none` per disattivare i logs\n" +
        ":small_blue_diamond: `ticket transcript-logs [#Canale/ID | None]`\n" +
        "Imposta un canale per inviare i transcript in un canale diverso da quello dei logs, inserisci \`none\` per disattivare i logs\n" +
        ":small_blue_diamond: `ticket info (panelID)`\n" +
        "Visualizza le informazioni su un panel, se nessun panel viene inserito verranno mostrati tutti panel\n" +
        ":small_blue_diamond: `ticket [Open/Close/Transcript]`\n" +
        "Apri/Chiudi o trascrivi il ticket in cui e' stato eseguito il comando",
    tickets_examples: "A causa del grosso numero di comandi, tutti gli esempi sono presenti nelle varie categorie^^",
    tickets_small_desc: "Configura la verifica tramite captcha",
    //tickets create
    tickets_creation_sys: "Sistema di creazione tickets",
    tickets_create_message: "Desideri iniziare la creazione di un nuovo panel?\n**Il panel verra' creato in questo canale**",
    ticket_create_exited: "Creazione del panel annullata.",
    tickets_create_insert_title: "Digita un titolo per il ticket",
    tickets_create_insert_message: "Digita un messaggio da far mandare al bot quando viene creato un nuovo ticket",
    tickets_create_insert_category: "Digita l'ID o il nome della categoria dove far creare i tickets.\n\n" +
        "**Nota**: I tickets (canali) prenderanno i permessi da questa categoria",
    tickets_create_invalid_category: "Categoria non valida, riprova",
    tickets_create_insert_upmessage: "Digita il messaggio esterno all'embed, utile a pingare i ruoli del supporto",
    tickets_create_insert_role: "Digita l'ID o tagga il ruolo che si dovra' occupare dei tickets.\n\n" +
        "**Nota**: A questo ruolo verranno forzatamente aggiunti i permessi di scrivere nel ticket (canale) *se necessario*",
    tickets_create_invalid_role: "Ruolo non valido, riprova",
    tickets_create_confirm_message: "Confermi la creazione di un nuovo panel con le seguenti impostazioni?",
    tickets_create_confirm_message_how: "Digita \`y\` per confermare o \`n\` per annullare",
    //tickets general
    tickets_panel: 'Per creare un ticket clicca il bottone :tickets: sottostante',
    tickets_panel_footer: "Tickets by NISD",
    create_ticket: "Crea Ticket",
    //ticket panel
    invalid_ticket_panel: 'Pannello non trovato, utilizza \`tickets info\` per vedere gli ID dei pannelli esistenti',
    tickets_panel_use: "ticket panel [panelID]",
    tickets_panel_description: "Ricrea un pannello gia' creato in precedenza",
    tickets_panel_examples: "ticket panel ID",
    //ticket edit
    tickets_edit_title: "Cosa vuoi modificare?",
    tickets_edit_sys: "Sistema di modifica tickets",
    tickets_edit_use: "ticket edit [panelID]",
    tickets_edit_description: "Modifica le impostazioni di un panel\n",
    tickets_edit_exited: "Modifica annullata",
    tickets_edit_examples: "ticket edit ID",
    tickets_edited: "Impostazioni del pannello salvate",
    tickets_edited_title: "Impostazioni del pannello salvate, utilizzare il comando \`ticket panel [panelID]\` per renderle effettive",
    //ticket delete
    tickets_delete_use: "ticket delete [panelID]",
    tickets_delete_description: "Cancella definitivamente un panel\n",
    tickets_delete_examples: "ticket delete ID",
    tickets_delete_title: (panelID) => {
        return `Cancellare il ticket panel \`${panelID}\`?`
    },
    tickets_delete_confirmed: ":accettato_gif: Ticket panel eliminato",
    tickets_delete_exited: ":negato_gif: Operazione Annullata",
    tickets_delete_sys: "Sistema di eliminazione tickets",
    //ticket info
    tickets_info_title: "NISD Tickets Info",
    tickets_info_description: (logs, tlogs) => {
        return `**Logs**: ${logs}\n**Transcript Logs**: ${tlogs}\n`
    },
    //ticket logs
    tickets_logs_use: "ticket logs [#Canale/ID | None]",
    tickets_logs_description: "Imposta un canale per i logs dei ticket, inserisci \`none\` per disattivare i logs",
    tickets_logs_examples: "ticket logs ID\nticket logs none",
    tickets_logs_success: (none, channel) => {
        return none ? "Da ora non verranno piu' mandati logs relativi ai tickets" : `Canale dei ticket logs aggiornato, nuovo canale: ${channel}`
    },
    //ticket transcript-logs
    tickets_transcriptlogs_use: "ticket transcript-logs [#Canale/ID | None]",
    tickets_transcriptlogs_description: "Imposta un canale per inviare i transcript in un canale diverso da quello dei logs, inserisci \`none\` per disattivare i logs",
    tickets_transcriptlogs_examples: "ticket transcript-logs ID\nticket transcript-logs none",
    tickets_transcriptlogs_success: (none, channel) => {
        return none ? "Da ora le trascrizioni ritorneranno ad essere mandate nel canale logs (se settato) o nel ticket (in caso contrario)" : `Canale delle trascrizioni aggiornato, nuovo canale: ${channel}`
    },
    //language
    lang_use: "lang [language]",
    lang_description: "Scegli la lingua per il bot in questo server",
    lang_examples: "`lang it`\n`lang en`",
}
