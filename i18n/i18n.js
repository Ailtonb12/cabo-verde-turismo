const i18n = {
  currentLang: localStorage.getItem('cv_lang') || 'pt',
  translations: {
    pt: {
      nav: {
        home: "Início",
        ilhas: "Ilhas",
        destinos: "Destinos",
        voos: "Voos",
        carros: "Carros",
        experiencias: "Experiências",
        ofertas: "Ofertas",
        contacto: "Contacto",
        analytics: "Analytics",
        favoritos: "Favoritos",
        anuncie: "Anuncie seu espaço",
        minha_conta: "Minha conta",
        minhas_reservas: "Minhas Reservas",
        terminar_sessao: "Terminar Sessão",
        pesquisar: "Pesquisar"
      },
      search: {
        title: "Pesquisar",
        placeholder: "Pesquisar ilhas, destinos, ofertas...",
        no_results: "Nenhum resultado encontrado.",
        destino: "Destino",
        checkin: "Check-in",
        checkout: "Check-out",
        hospedes: "Hóspedes",
        buscar: "Buscar",
        data_checkin: "Data de entrada",
        data_checkout: "Data de saída"
      },
      user: {
        login: "Entrar",
        register: "Registar",
        email: "Email",
        password: "Palavra-passe",
        name: "Nome completo",
        phone: "Telefone",
        login_title: "Iniciar sessão ou criar conta",
        login_subtitle: "Insira o seu email para continuar",
        continue: "Continuar",
        or: "ou",
        google: "Continuar com Google",
        logout: "Terminar Sessão",
        no_account: "Área de membros para reservar voos e ofertas exclusivas",
        recover_password: "Recuperar palavra-passe",
        recover_email: "Insira o seu email para receber um código de recuperação",
        new_password: "Nova palavra-passe",
        confirm_password: "Confirmar palavra-passe",
        send_code: "Enviar código",
        verify_code: "Verificar código",
        code_sent: "Enviamos um código de 6 dígitos para {{email}}",
        password_changed: "Senha alterada com sucesso!",
        register_success: "Conta criada com sucesso!",
        login_success: "Bem-vindo(a), {{name}}!",
        invalid_credentials: "Email ou palavra-passe incorretos.",
        email_exists: "Este email já está registado.",
        fill_all: "Preencha todos os campos.",
        invalid_email: "Email inválido.",
        password_short: "A palavra-passe deve ter pelo menos 6 caracteres.",
        recover_sms: "📱 Perdeu o acesso ao seu e-mail? Recuperar por SMS",
        sms_recovery: "Recuperar conta por SMS",
        sms_recovery_info: "Perdeu o acesso ao seu email? Recupere a sua conta usando o número de telefone registado.",
        recovery_found: "Conta encontrada: {{email}}"
      },
      home: {
        discover: "Descobrir Local",
        bookmark: "Guardar",
        slide_of: "de"
      },
      ilhas: {
        title: "ILHAS DE CABO VERDE",
        subtitle: "Descubra as 10 ilhas do arquipélago"
      },
      destinos: {
        title: "DESTINOS TURÍSTICOS",
        subtitle: "Os lugares mais lindos de Cabo Verde"
      },
      voos: {
        title: "VOOS",
        subtitle: "Pesquise e reserve o seu voo para Cabo Verde",
        origem: "Origem",
        destino: "Destino",
        data_ida: "Data Ida",
        data_volta: "Data Volta",
        passageiros: "Passageiros",
        pesquisar: "Pesquisar Voos",
        select_dates: "Por favor selecione as datas de ida e volta.",
        result_title: "Resultados de voos"
      },
      carros: {
        title: "ALUGUER DE CARROS",
        subtitle: "Explore Cabo Verde com liberdade e conforto",
        alugar: "Alugar",
        por_dia: "/ dia",
        passageiros: "passageiros",
        manual: "Manual",
        automatico: "Automático",
        gasolina: "Gasolina",
        diesel: "Diesel",
        eletrico: "Elétrico",
        especificacoes: "Especificações",
        transmissao: "Transmissão",
        combustivel: "Combustível",
        lugares: "Lugares",
        portas: "Portas",
        ar_condicionado: "Ar condicionado",
        local_levantamento: "Local de Levantamento",
        data_levantamento: "Data de Levantamento",
        data_devolucao: "Data de Devolução",
        categoria: "Categoria",
        economico: "Económico",
        suv: "SUV / 4x4",
        familiar: "Familiar",
        todos: "Todos",
        disponiveis: "carros disponíveis",
        reservar: "Reservar este carro",
        cve: "CVE"
      },
      experiencias: {
        title: "EXPERIÊNCIAS",
        subtitle: "Viva aventuras inesquecíveis em Cabo Verde",
        reservar: "Reservar agora",
        por_pessoa: "/ pessoa",
        duracao: "Duração",
        participantes: "Participantes",
        guia: "Guia",
        inclusoes: "Inclusões",
        requisitos: "Requisitos",
        ponto_encontro: "Ponto de encontro",
        manha: "Manhã",
        tarde: "Tarde",
        disponivel: "Disponível",
        esgotado: "Esgotado",
        categoria: "Categoria",
        aventura: "Aventura",
        cultural: "Cultural",
        gastronomia: "Gastronomia",
        natureza: "Natureza"
      },
      ofertas: {
        title: "OFERTAS ESPECIAIS",
        subtitle: "Pacotes imperdíveis para Cabo Verde",
        ao_vivo: "AO VIVO",
        precos_atualizados: "Preços atualizados online — {{time}}",
        ultima_atualizacao: "Última atualização: {{time}}",
        reservar_oferta: "Reservar esta oferta"
      },
      contacto: {
        title: "CONTACTO",
        subtitle: "Estamos aqui para ajudar",
        morada: "Praia, Ilha de Santiago, Cabo Verde",
        email: "info@caboverde-turismo.cv",
        telefone: "+238 260 0000",
        form_name: "Seu nome",
        form_email: "Seu email",
        form_assunto: "Assunto",
        form_mensagem: "A sua mensagem",
        form_enviar: "Enviar Mensagem",
        form_success: "Mensagem enviada com sucesso! Entraremos em contacto brevemente.",
        subject_reservas: "Reservas",
        subject_info: "Informações",
        subject_reclamacao: "Reclamação",
        subject_outro: "Outro"
      },
      favoritos: {
        title: "Meus Favoritos",
        empty: "Nenhum favorito adicionado",
        login_required: "Faça login para ver seus favoritos",
        sem_favoritos: "Nenhum {{categoria}} nos favoritos",
        explorar: "Explorar"
      },
      alojamento_registo: {
        title: "Anuncie o seu espaço",
        subtitle: "Registe a sua propriedade para hóspedes de todo o mundo",
        nome: "Nome do espaço",
        tipo: "Tipo de propriedade",
        descricao: "Descrição",
        preco: "Preço por noite",
        localizacao: "Localização",
        fotos: "Fotos",
        enviar: "Publicar anúncio",
        success: "Anúncio publicado com sucesso!",
        apartamento: "Apartamento",
        villa: "Villa",
        guesthouse: "Guesthouse",
        hotel: "Hotel",
        quarto: "Quarto"
      },
      footer: {
        description: "A sua porta de entrada para experiências inesquecíveis em Cabo Verde.",
        explore: "Explorar",
        contact: "Contacto",
        follow: "Siga-nos",
        rights: "Todos os direitos reservados.",
        termos: "Termos e Condições",
        privacidade: "Política de Privacidade"
      },
      avaliacoes: {
        title: "Avaliações",
        estrelas: "estrelas",
        enviar: "Enviar avaliação",
        comentario: "Seu comentário",
        obrigado: "Obrigado pela sua avaliação!"
      },
      pagination: {
        anterior: "Anterior",
        seguinte: "Seguinte"
      },
      general: {
        loading: "A carregar...",
        error: "Erro ao carregar dados.",
        save: "Salvar",
        cancel: "Cancelar",
        confirm: "Confirmar",
        back: "Voltar",
        next: "Seguinte",
        close: "Fechar",
        view_all: "Ver todos",
        search: "Pesquisar",
        results: "resultados",
        cabo_verde: "Cabo Verde"
      }
    },
    en: {
      nav: { home: "Home", ilhas: "Islands", destinos: "Destinations", voos: "Flights", carros: "Cars", experiencias: "Experiences", ofertas: "Offers", contacto: "Contact", analytics: "Analytics", favoritos: "Favorites", anuncie: "List your space", minha_conta: "My account", minhas_reservas: "My Bookings", terminar_sessao: "Logout", pesquisar: "Search" },
      search: { title: "Search", placeholder: "Search islands, destinations, offers...", no_results: "No results found.", destino: "Destination", checkin: "Check-in", checkout: "Check-out", hospedes: "Guests", buscar: "Search", data_checkin: "Check-in date", data_checkout: "Check-out date" },
      user: { login: "Login", register: "Register", email: "Email", password: "Password", name: "Full name", phone: "Phone", login_title: "Sign in or create account", login_subtitle: "Enter your email to continue", continue: "Continue", or: "or", google: "Continue with Google", logout: "Logout", no_account: "Member area to book flights and exclusive offers", recover_password: "Recover password", recover_email: "Enter your email to receive a recovery code", new_password: "New password", confirm_password: "Confirm password", send_code: "Send code", verify_code: "Verify code", code_sent: "We sent a 6-digit code to {{email}}", password_changed: "Password changed successfully!", register_success: "Account created successfully!", login_success: "Welcome, {{name}}!", invalid_credentials: "Incorrect email or password.", email_exists: "This email is already registered.", fill_all: "Fill in all fields.", invalid_email: "Invalid email.", password_short: "Password must have at least 6 characters.", recover_sms: "📱 Lost access to your email? Recover by SMS", sms_recovery: "Recover account by SMS", sms_recovery_info: "Lost access to your email? Recover your account using your registered phone number.", recovery_found: "Account found: {{email}}" },
      home: { discover: "Discover Place", bookmark: "Save", slide_of: "of" },
      ilhas: { title: "ISLANDS OF CAPE VERDE", subtitle: "Discover the 10 islands of the archipelago" },
      destinos: { title: "TOURIST DESTINATIONS", subtitle: "The most beautiful places in Cape Verde" },
      voos: { title: "FLIGHTS", subtitle: "Search and book your flight to Cape Verde", origem: "Origin", destino: "Destination", data_ida: "Departure", data_volta: "Return", passageiros: "Passengers", pesquisar: "Search Flights", select_dates: "Please select departure and return dates.", result_title: "Flight results" },
      carros: { title: "CAR RENTAL", subtitle: "Explore Cape Verde with freedom and comfort", alugar: "Rent", por_dia: "/ day", passageiros: "passengers", manual: "Manual", automatico: "Automatic", gasolina: "Gasoline", diesel: "Diesel", eletrico: "Electric", especificacoes: "Specifications", transmissao: "Transmission", combustivel: "Fuel", lugares: "Seats", portas: "Doors", ar_condicionado: "Air conditioning", local_levantamento: "Pickup Location", data_levantamento: "Pickup Date", data_devolucao: "Return Date", categoria: "Category", economico: "Economy", suv: "SUV / 4x4", familiar: "Family", todos: "All", disponiveis: "cars available", reservar: "Book this car", cve: "CVE" },
      experiencias: { title: "EXPERIENCES", subtitle: "Live unforgettable adventures in Cape Verde", reservar: "Book now", por_pessoa: "/ person", duracao: "Duration", participantes: "Participants", guia: "Guide", inclusoes: "Inclusions", requisitos: "Requirements", ponto_encontro: "Meeting point", manha: "Morning", tarde: "Afternoon", disponivel: "Available", esgotado: "Sold out", categoria: "Category", aventura: "Adventure", cultural: "Cultural", gastronomia: "Gastronomy", natureza: "Nature" },
      ofertas: { title: "SPECIAL OFFERS", subtitle: "Unmissable packages for Cape Verde", ao_vivo: "LIVE", precos_atualizados: "Prices updated online — {{time}}", ultima_atualizacao: "Last update: {{time}}", reservar_oferta: "Book this offer" },
      contacto: { title: "CONTACT", subtitle: "We are here to help", morada: "Praia, Santiago Island, Cape Verde", email: "info@caboverde-turismo.cv", telefone: "+238 260 0000", form_name: "Your name", form_email: "Your email", form_assunto: "Subject", form_mensagem: "Your message", form_enviar: "Send Message", form_success: "Message sent successfully! We will contact you shortly.", subject_reservas: "Bookings", subject_info: "Information", subject_reclamacao: "Complaint", subject_outro: "Other" },
      favoritos: { title: "My Favorites", empty: "No favorites added yet", login_required: "Login to view your favorites", sem_favoritos: "No {{categoria}} in favorites", explorar: "Explore" },
      alojamento_registo: { title: "List your space", subtitle: "Register your property for guests from around the world", nome: "Space name", tipo: "Property type", descricao: "Description", preco: "Price per night", localizacao: "Location", fotos: "Photos", enviar: "Publish listing", success: "Listing published successfully!", apartamento: "Apartment", villa: "Villa", guesthouse: "Guesthouse", hotel: "Hotel", quarto: "Room" },
      footer: { description: "Your gateway to unforgettable experiences in Cape Verde.", explore: "Explore", contact: "Contact", follow: "Follow us", rights: "All rights reserved.", termos: "Terms and Conditions", privacidade: "Privacy Policy" },
      avaliacoes: { title: "Reviews", estrelas: "stars", enviar: "Submit review", comentario: "Your comment", obrigado: "Thank you for your review!" },
      pagination: { anterior: "Previous", seguinte: "Next" },
      general: { loading: "Loading...", error: "Error loading data.", save: "Save", cancel: "Cancel", confirm: "Confirm", back: "Back", next: "Next", close: "Close", view_all: "View all", search: "Search", results: "results", cabo_verde: "Cape Verde" }
    },
    fr: {
      nav: { home: "Accueil", ilhas: "Îles", destinos: "Destinations", voos: "Vols", carros: "Voitures", experiencias: "Expériences", ofertas: "Offres", contacto: "Contact", analytics: "Analytique", favoritos: "Favoris", anuncie: "Annoncez", minha_conta: "Mon compte", minhas_reservas: "Mes réservations", terminar_sessao: "Déconnexion", pesquisar: "Rechercher" },
      search: { title: "Rechercher", placeholder: "Rechercher îles, destinations...", no_results: "Aucun résultat.", destino: "Destination", checkin: "Arrivée", checkout: "Départ", hospedes: "Voyageurs", buscar: "Chercher" },
      user: { login: "Connexion", register: "S'inscrire", email: "Email", password: "Mot de passe", name: "Nom complet", phone: "Téléphone", login_title: "Connexion ou inscription", login_subtitle: "Entrez votre email", continue: "Continuer", or: "ou", google: "Continuer avec Google", logout: "Déconnexion", recover_password: "Récupérer mot de passe", new_password: "Nouveau mot de passe", confirm_password: "Confirmer", send_code: "Envoyer", verify_code: "Vérifier", code_sent: "Code envoyé à {{email}}", password_changed: "Mot de passe modifié!", register_success: "Compte créé!", login_success: "Bienvenue {{name}}!", invalid_credentials: "Email ou mot de passe incorrect.", email_exists: "Email déjà utilisé.", fill_all: "Remplissez tous les champs.", invalid_email: "Email invalide.", password_short: "6 caractères minimum." },
      home: { discover: "Découvrir", bookmark: "Sauvegarder", slide_of: "sur" },
      ilhas: { title: "ÎLES DU CAP-VERT", subtitle: "Découvrez les 10 îles" },
      destinos: { title: "DESTINATIONS", subtitle: "Les plus beaux endroits du Cap-Vert" },
      voos: { title: "VOLS", subtitle: "Réservez votre vol", origem: "Origine", destino: "Destination", data_ida: "Aller", data_volta: "Retour", passageiros: "Passagers", pesquisar: "Chercher" },
      carros: { title: "LOCATION DE VOITURES", subtitle: "Explorez le Cap-Vert librement", alugar: "Louer", por_dia: "/ jour", passageiros: "passagers", manual: "Manuelle", automatico: "Automatique", gasolina: "Essence", diesel: "Diesel", eletrico: "Électrique", lugares: "Places", categoria: "Catégorie", economico: "Économique", suv: "SUV", familiar: "Familial", todos: "Tous", disponiveis: "voitures disponibles", reservar: "Réserver", cve: "CVE" },
      experiencias: { title: "EXPÉRIENCES", subtitle: "Aventures inoubliables", reservar: "Réserver", por_pessoa: "/ personne", duracao: "Durée", participantes: "Participants", guia: "Guide", inclusoes: "Inclus", requisitos: "Prérequis", ponto_encontro: "Point de rencontre", manha: "Matin", tarde: "Après-midi", categoria: "Catégorie" },
      ofertas: { title: "OFFRES SPÉCIALES", subtitle: "Offres imbattables", ao_vivo: "EN DIRECT", precos_atualizados: "Prix mis à jour — {{time}}", ultima_atualizacao: "Dernière mise à jour: {{time}}", reservar_oferta: "Réserver" },
      contacto: { title: "CONTACT", subtitle: "Nous sommes là pour vous aider", form_name: "Votre nom", form_email: "Votre email", form_assunto: "Sujet", form_mensagem: "Votre message", form_enviar: "Envoyer" },
      favoritos: { title: "Mes Favoris", empty: "Aucun favori", login_required: "Connectez-vous", explorar: "Explorer" },
      footer: { description: "Votre porte d'entrée pour le Cap-Vert.", explore: "Explorer", contact: "Contact", follow: "Suivez-nous", rights: "Tous droits réservés." },
      general: { loading: "Chargement...", error: "Erreur.", save: "Sauvegarder", cancel: "Annuler", back: "Retour", close: "Fermer", view_all: "Voir tout", cabo_verde: "Cap-Vert" }
    },
    es: {
      nav: { home: "Inicio", ilhas: "Islas", destinos: "Destinos", voos: "Vuelos", carros: "Autos", experiencias: "Experiencias", ofertas: "Ofertas", contacto: "Contacto", analytics: "Analíticas", favoritos: "Favoritos", anuncie: "Anuncie", minha_conta: "Mi cuenta", minhas_reservas: "Mis reservas", terminar_sessao: "Cerrar sesión", pesquisar: "Buscar" },
      search: { title: "Buscar", placeholder: "Buscar islas, destinos...", no_results: "Sin resultados.", destino: "Destino", checkin: "Entrada", checkout: "Salida", hospedes: "Huéspedes", buscar: "Buscar" },
      user: { login: "Iniciar sesión", register: "Registrarse", email: "Email", password: "Contraseña", name: "Nombre completo", phone: "Teléfono", login_title: "Iniciar sesión o registrarse", login_subtitle: "Ingrese su email", continue: "Continuar", or: "o", google: "Continuar con Google", logout: "Cerrar sesión", recover_password: "Recuperar contraseña", new_password: "Nueva contraseña", confirm_password: "Confirmar", send_code: "Enviar", verify_code: "Verificar", code_sent: "Código enviado a {{email}}", password_changed: "Contraseña cambiada!", register_success: "Cuenta creada!", login_success: "Bienvenido {{name}}!", invalid_credentials: "Email o contraseña incorrectos.", email_exists: "Email ya registrado.", password_short: "Mínimo 6 caracteres." },
      home: { discover: "Descubrir", bookmark: "Guardar", slide_of: "de" },
      ilhas: { title: "ISLAS DE CABO VERDE", subtitle: "Descubra las 10 islas" },
      destinos: { title: "DESTINOS TURÍSTICOS", subtitle: "Los lugares más bellos" },
      voos: { title: "VUELOS", subtitle: "Reserve su vuelo", origem: "Origen", destino: "Destino", data_ida: "Ida", data_volta: "Vuelta", passageiros: "Pasajeros", pesquisar: "Buscar" },
      carros: { title: "ALQUILER DE AUTOS", subtitle: "Explore Cabo Verde libremente", alugar: "Alquilar", por_dia: "/ día", passageiros: "pasajeros", manual: "Manual", automatico: "Automático", gasolina: "Gasolina", diesel: "Diésel", lugares: "Plazas", categoria: "Categoría", economico: "Económico", suv: "SUV", familiar: "Familiar", todos: "Todos", disponiveis: "autos disponibles", reservar: "Reservar", cve: "CVE" },
      experiencias: { title: "EXPERIENCIAS", subtitle: "Aventuras inolvidables", reservar: "Reservar", por_pessoa: "/ persona", duracao: "Duración", participantes: "Participantes", guia: "Guía", inclusoes: "Incluye", requisitos: "Requisitos", ponto_encontro: "Punto de encuentro" },
      ofertas: { title: "OFERTAS ESPECIALES", subtitle: "Paquetes imperdibles", ao_vivo: "EN VIVO", precos_atualizados: "Precios actualizados — {{time}}", ultima_atualizacao: "Última actualización: {{time}}", reservar_oferta: "Reservar" },
      contacto: { title: "CONTACTO", subtitle: "Estamos aquí para ayudar", form_name: "Su nombre", form_email: "Su email", form_assunto: "Asunto", form_mensagem: "Su mensaje", form_enviar: "Enviar" },
      favoritos: { title: "Mis Favoritos", empty: "Sin favoritos", login_required: "Inicie sesión", explorar: "Explorar" },
      footer: { description: "Su puerta de entrada a Cabo Verde.", explore: "Explorar", contact: "Contacto", follow: "Síganos", rights: "Todos los derechos reservados." },
      general: { loading: "Cargando...", error: "Error.", save: "Guardar", cancel: "Cancelar", back: "Volver", close: "Cerrar", view_all: "Ver todo", cabo_verde: "Cabo Verde" }
    },
    de: {
      nav: { home: "Start", ilhas: "Inseln", destinos: "Reiseziele", voos: "Flüge", carros: "Autos", experiencias: "Erlebnisse", ofertas: "Angebote", contacto: "Kontakt", analytics: "Analytik", favoritos: "Favoriten", anuncie: "Inserieren", minha_conta: "Mein Konto", minhas_reservas: "Meine Buchungen", terminar_sessao: "Abmelden", pesquisar: "Suchen" },
      search: { title: "Suchen", placeholder: "Inseln, Reiseziele suchen...", no_results: "Keine Ergebnisse.", destino: "Zielort", checkin: "Check-in", checkout: "Check-out", hospedes: "Gäste", buscar: "Suchen" },
      user: { login: "Anmelden", register: "Registrieren", email: "E-Mail", password: "Passwort", name: "Vollständiger Name", phone: "Telefon", login_title: "Anmelden oder Konto erstellen", login_subtitle: "E-Mail eingeben", continue: "Weiter", or: "oder", google: "Mit Google fortfahren", logout: "Abmelden", recover_password: "Passwort zurücksetzen", new_password: "Neues Passwort", confirm_password: "Bestätigen", send_code: "Code senden", verify_code: "Prüfen", code_sent: "Code an {{email}} gesendet", password_changed: "Passwort geändert!", register_success: "Konto erstellt!", login_success: "Willkommen {{name}}!", invalid_credentials: "Falsche E-Mail oder Passwort.", password_short: "Mindestens 6 Zeichen." },
      home: { discover: "Entdecken", bookmark: "Merken", slide_of: "von" },
      ilhas: { title: "INSELN VON KAP VERDE", subtitle: "Entdecken Sie die 10 Inseln" },
      destinos: { title: "REISEZIELE", subtitle: "Die schönsten Orte" },
      voos: { title: "FLÜGE", subtitle: "Buchen Sie Ihren Flug", origem: "Abflugort", destino: "Ziel", data_ida: "Hinflug", data_volta: "Rückflug", passageiros: "Passagiere", pesquisar: "Suchen" },
      carros: { title: "AUTOVERMIETUNG", subtitle: "Kap Verde frei erkunden", alugar: "Mieten", por_dia: "/ Tag", passageiros: "Passagiere", manual: "Manuell", automatico: "Automatik", gasolina: "Benzin", diesel: "Diesel", lugares: "Sitze", categoria: "Kategorie", economico: "Economy", suv: "SUV", familiar: "Familie", todos: "Alle", disponiveis: "Autos verfügbar", reservar: "Buchen", cve: "CVE" },
      experiencias: { title: "ERLEBNISSE", subtitle: "Unvergessliche Abenteuer", reservar: "Buchen", por_pessoa: "/ Person", duracao: "Dauer", participantes: "Teilnehmer", guia: "Guide", inclusoes: "Inklusive", requisitos: "Anforderungen" },
      ofertas: { title: "SONDERANGEBOTE", subtitle: "Unschlagbare Pakete", ao_vivo: "LIVE", precos_atualizados: "Preise aktualisiert — {{time}}", ultima_atualizacao: "Letzte Aktualisierung: {{time}}", reservar_oferta: "Buchen" },
      contacto: { title: "KONTAKT", subtitle: "Wir helfen gerne", form_name: "Ihr Name", form_email: "Ihre E-Mail", form_assunto: "Betreff", form_mensagem: "Ihre Nachricht", form_enviar: "Senden" },
      favoritos: { title: "Meine Favoriten", empty: "Keine Favoriten", login_required: "Anmelden", explorar: "Erkunden" },
      footer: { description: "Ihr Tor zu Kap Verde.", explore: "Erkunden", contact: "Kontakt", follow: "Folgen Sie uns", rights: "Alle Rechte vorbehalten." },
      general: { loading: "Laden...", error: "Fehler.", save: "Speichern", cancel: "Abbrechen", back: "Zurück", close: "Schließen", view_all: "Alle anzeigen", cabo_verde: "Kap Verde" }
    },
    it: {
      nav: { home: "Home", ilhas: "Isole", destinos: "Destinazioni", voos: "Voli", carros: "Auto", experiencias: "Esperienze", ofertas: "Offerte", contacto: "Contatti", analytics: "Analitica", favoritos: "Preferiti", anuncie: "Inserisci", minha_conta: "Il mio account", minhas_reservas: "Le mie prenotazioni", terminar_sessao: "Esci", pesquisar: "Cerca" },
      search: { title: "Cerca", placeholder: "Cerca isole, destinazioni...", no_results: "Nessun risultato.", destino: "Destinazione", checkin: "Check-in", checkout: "Check-out", hospedes: "Ospiti", buscar: "Cerca" },
      user: { login: "Accedi", register: "Registrati", email: "Email", password: "Password", name: "Nome completo", phone: "Telefono", login_title: "Accedi o registrati", login_subtitle: "Inserisci la tua email", continue: "Continua", or: "o", google: "Continua con Google", logout: "Esci", recover_password: "Recupera password", new_password: "Nuova password", confirm_password: "Conferma", send_code: "Invia", verify_code: "Verifica", code_sent: "Codice inviato a {{email}}", password_changed: "Password cambiata!", register_success: "Account creato!", login_success: "Benvenuto {{name}}!", invalid_credentials: "Email o password errati.", password_short: "Minimo 6 caratteri." },
      home: { discover: "Scopri", bookmark: "Salva", slide_of: "di" },
      ilhas: { title: "ISOLE DI CAPO VERDE", subtitle: "Scopri le 10 isole" },
      destinos: { title: "DESTINAZIONI", subtitle: "I luoghi più belli" },
      voos: { title: "VOLI", subtitle: "Prenota il tuo volo", origem: "Partenza", destino: "Destinazione", data_ida: "Andata", data_volta: "Ritorno", passageiros: "Passeggeri", pesquisar: "Cerca" },
      carros: { title: "NOLEGGIO AUTO", subtitle: "Esplora Capo Verde in libertà", alugar: "Noleggia", por_dia: "/ giorno", passageiros: "passeggeri", manual: "Manuale", automatico: "Automatico", gasolina: "Benzina", diesel: "Diesel", lugares: "Posti", categoria: "Categoria", economico: "Economica", suv: "SUV", familiar: "Familiare", todos: "Tutti", disponiveis: "auto disponibili", reservar: "Prenota", cve: "CVE" },
      experiencias: { title: "ESPERIENZE", subtitle: "Avventure indimenticabili", reservar: "Prenota", por_pessoa: "/ persona", duracao: "Durata", participantes: "Partecipanti", guia: "Guida", inclusoes: "Incluso", requisitos: "Requisiti" },
      ofertas: { title: "OFFERTE SPECIALI", subtitle: "Pacchetti imperdibili", ao_vivo: "IN DIRETTA", precos_atualizados: "Prezzi aggiornati — {{time}}", ultima_atualizacao: "Ultimo aggiornamento: {{time}}", reservar_oferta: "Prenota" },
      contacto: { title: "CONTATTI", subtitle: "Siamo qui per aiutare", form_name: "Il tuo nome", form_email: "La tua email", form_assunto: "Oggetto", form_mensagem: "Il tuo messaggio", form_enviar: "Invia" },
      favoritos: { title: "I Miei Preferiti", empty: "Nessun preferito", login_required: "Accedi", explorar: "Esplora" },
      footer: { description: "La tua porta per Capo Verde.", explore: "Esplora", contact: "Contatti", follow: "Seguici", rights: "Tutti i diritti riservati." },
      general: { loading: "Caricamento...", error: "Errore.", save: "Salva", cancel: "Annulla", back: "Indietro", close: "Chiudi", view_all: "Vedi tutto", cabo_verde: "Capo Verde" }
    },
    cv: {
      nav: { home: "Inísiu", ilhas: "Ilhas", destinos: "Destinu", voos: "Vóos", carros: "Karru", experiencias: "Experiências", ofertas: "Ofertas", contacto: "Kontátu", analytics: "Analítika", favoritos: "Favoritus", anuncie: "Anunsiá", minha_conta: "Nha konto", minhas_reservas: "Nhas reservas", terminar_sessao: "Sai", pesquisar: "Peskisá" },
      search: { title: "Peskisá", placeholder: "Peskisá ilhas, destinus...", no_results: "Nada atxá.", destino: "Destinu", checkin: "Entrada", checkout: "Saída", hospedes: "Hóspedis", buscar: "Peskisá" },
      user: { login: "Entrá", register: "Rejistá", email: "Email", password: "Palavra-passi", name: "Nómi kumpretu", phone: "Tilifóni", login_title: "Entrá ou kria konto", login_subtitle: "Ponbu email", continue: "Kontinua", or: "ó", google: "Kontinua ku Google", logout: "Sai", recover_password: "Rikuperá palavra-passi", new_password: "Palavra-passi nova", confirm_password: "Konfirmá", send_code: "Manda kódigu", verify_code: "Verifiká", code_sent: "Manda kódigu pa {{email}}", password_changed: "Palavra-passi mudadu!", register_success: "Konta kriadu!", login_success: "Bem-vindu {{name}}!", invalid_credentials: "Email ó palavra-passi erradu.", password_short: "Pelo menus 6 karáteris." },
      home: { discover: "Diskubrí", bookmark: "Garda", slide_of: "di" },
      ilhas: { title: "ILHAS DI KABU VERDI", subtitle: "Diskubrí 10 ilhas" },
      destinos: { title: "DESTINUS TURÍSTIKUS", subtitle: "Lugaris más líndus" },
      voos: { title: "VÓOS", subtitle: "Rezerva bu vóu", origem: "Origem", destino: "Destinu", data_ida: "Bá", data_volta: "Voltá", passageiros: "Pasajerus", pesquisar: "Peskisá" },
      carros: { title: "ALUGUER DI KARRUS", subtitle: "Esplorá Kabu Verdi libri", alugar: "Alugá", por_dia: "/ dia", passageiros: "pasajerus", lugares: "Lugaris", categoria: "Katiguria", disponiveis: "karrus disponivel", reservar: "Rezerva", cve: "CVE" },
      experiencias: { title: "EXPERIÊNCIAS", subtitle: "Aventuras inxkidissível", reservar: "Rezerva", por_pessoa: "/ pessoa", duracao: "Durason", participantes: "Partisipantis" },
      ofertas: { title: "OFERTAS SPESIAL", subtitle: "Pakotis imperdível", ao_vivo: "NA MÓ", precos_atualizados: "Presu atualizadu — {{time}}", ultima_atualizacao: "Últimu atualizason: {{time}}", reservar_oferta: "Rezerva" },
      contacto: { title: "KONTÁTU", subtitle: "Nu sta li pa djudá", form_name: "Bu nómi", form_email: "Bu email", form_assunto: "Asuntu", form_mensagem: "Bu mensajen", form_enviar: "Manda" },
      favoritos: { title: "Nhas Favoritus", empty: "Nenhum favoritu", login_required: "Entrá", explorar: "Esplorá" },
      footer: { description: "Bu porta pa Kabu Verdi.", explore: "Esplorá", contact: "Kontátu", follow: "Sigi-nu", rights: "Todus direitus reservadu." },
      general: { loading: "Karregandu...", error: "Eru.", save: "Salvá", cancel: "Kanselá", back: "Voltá", close: "Fexá", view_all: "Odjá tudu", cabo_verde: "Kabo Verdi" }
    }
  },
  listeners: [],

  init() {
    this.apply()
  },

  t(key, params = {}) {
    const keys = key.split('.')
    let val = this.translations[this.currentLang]
    for (const k of keys) {
      val = val?.[k]
    }
    if (val === undefined) {
      let fallback = this.translations['pt']
      for (const k of keys) fallback = fallback?.[k]
      val = fallback || key
    }
    if (params) {
      val = val.replace(/\{\{(\w+)\}\}/g, (_, k) => params[k] ?? `{{${k}}}`)
    }
    return val
  },

  setLang(lang) {
    if (this.translations[lang]) {
      this.currentLang = lang
      localStorage.setItem('cv_lang', lang)
      this.apply()
      this.listeners.forEach(fn => fn(lang))
    }
  },

  onChange(fn) {
    this.listeners.push(fn)
  },

  apply() {
    document.documentElement.lang = this.currentLang
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = this.t(el.dataset.i18n)
    })
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = this.t(el.dataset.i18nPlaceholder)
    })
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      el.title = this.t(el.dataset.i18nTitle)
    })
  }
}

window.i18n = i18n
