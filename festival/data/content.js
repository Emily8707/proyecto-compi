// ============================================
// SPORT FEST 2026 - TODOS LOS DATOS
// ============================================

const sportFestData = {
    stats: {
        events: 4,
        sports: 5,
        results: 3,
        venues: 6
    },

    inauguration: {
        title: '🎤 Acto de Inauguración',
        subtitle: 'Aula Magna - Universidad Mariano Gálvez',
        time: '07:00 h',
        date: '6 de Julio, 2026',
        protocol: [
            { time: '07:00', activity: '🛡️ Video de introducción de seguridad' },
            { time: '07:01', activity: '👋 Bienvenida oficial a las delegaciones' },
            { time: '07:03', activity: '🙏 Oración institucional' },
            { time: '07:08', activity: '📢 Palabras de las autoridades universitarias' },
            { time: '07:13', activity: '🌟 Conferencia motivacional' },
            { time: '07:43', activity: '🏅 Reconocimiento a oradores' },
            { time: '07:46', activity: '🏁 Invitación a campos deportivos' }
        ],
        rules: [
            { icon: '🚫', text: 'No se permiten alimentos ni bebidas dentro del aula magna', type: 'prohibited' },
            { icon: '🪑', text: 'Cuide el mobiliario, equipo e instalaciones', type: 'info' },
            { icon: '🤝', text: 'Mantenga una actitud respetuosa con todos los asistentes', type: 'allowed' },
            { icon: '💬', text: 'Utilice un lenguaje adecuado y respetuoso', type: 'allowed' },
            { icon: '🚶', text: 'Al finalizar, salga en fila y de forma ordenada', type: 'info' },
            { icon: '🔇', text: 'Guarde silencio durante las disertaciones', type: 'info' },
            { icon: '📱', text: 'Teléfonos en modo silencioso o apagado', type: 'warning' },
            { icon: '📸', text: 'No se permiten fotos, videos o transmisiones sin autorización', type: 'prohibited' },
            { icon: '🧹', text: 'Mantenga limpio el espacio', type: 'allowed' },
            { icon: '👮', text: 'Siga las indicaciones del personal organizador', type: 'info' }
        ],
        values: [
            { icon: '🙏', label: 'RESPETO' },
            { icon: '📋', label: 'DISCIPLINA' },
            { icon: '🤝', label: 'UNIDAD' },
            { icon: '⭐', label: 'EXCELENCIA' }
        ]
    },

    pool: {
        title: '🏊 Piscina Universitaria',
        subtitle: 'Código de Vestimenta y Reglas de Uso',
        bible: '"¿O no sabéis que vuestro cuerpo es templo del Espíritu Santo, que está en vosotros, el cual tenéis de Dios, y que no sois vuestros?" — 1 Corintios 6:19-20',
        women: {
            allowed: [
                '🩱 Traje de baño de una pieza o tipo deportivo con falda',
                '👚 Cobertura adecuada en el escote y la espalda',
                '👗 Shorts o falda de baño deben llegar a media pierna'
            ],
            notAllowed: [
                '🚫 Trajes de baño reveladores',
                '🚫 Trajes transparentes'
            ]
        },
        men: {
            allowed: [
                '🩳 Bermudas o shorts de baño holgados',
                '📏 A la altura de la rodilla como mínimo'
            ],
            notAllowed: [
                '🚫 Trajes de baño ajustados (tipo lycra)',
                '🚫 Bóxer corto'
            ]
        },
        rules: [
            { icon: '📋', text: 'Cumple con el código de conducta universitario' },
            { icon: '🎯', text: 'Uso exclusivo para estudiantes y personal autorizado' },
            { icon: '🚿', text: 'Ducha obligatoria antes de ingresar' },
            { icon: '👨‍👧', text: 'Menores de edad bajo supervisión adulta' },
            { icon: '🚫', text: 'No se permiten alimentos ni bebidas en el área' },
            { icon: '🔊', text: 'Ambiente apropiado: sin música alta, lenguaje edificante' },
            { icon: '⏰', text: 'Respeta los horarios establecidos' },
            { icon: '⚠️', text: 'No corras, no empujes, no clavados en áreas no permitidas' },
            { icon: '🧹', text: 'Mantén limpia el área' }
        ]
    },

    athletics: {
        title: '🏃 Competencia de Atletismo',
        subtitle: 'Código de Vestimenta para Participantes',
        bible: '"Todo lo que hagan, háganlo para la gloria de Dios." — 1 Corintios 10:31',
        principles: [
            '🏛️ Presentar una imagen profesional y respetuosa de la universidad',
            '🤝 Promover un ambiente de respeto para todos los participantes y espectadores',
            '🛡️ Utilizar vestimenta deportiva adecuada que favorezca la seguridad y el desempeño atlético'
        ],
        women: {
            allowed: [
                '👕 Camisetas deportivas o playeras institucionales',
                '👚 Tops deportivos con cobertura adecuada del torso',
                '🩳 Licras o shorts deportivos de largo moderado',
                '🏃 Uniformes deportivos que mantengan decencia y comodidad'
            ],
            notAllowed: [
                '🚫 Prendas excesivamente cortas que expongan los glúteos',
                '🚫 Crop tops que dejen expuesta la zona abdominal',
                '🚫 Transparencia o escotes pronunciados'
            ]
        },
        men: {
            allowed: [
                '👕 Camisetas deportivas o playeras institucionales',
                '🩳 Shorts o pantalonetas deportivas apropiadas',
                '👟 Calzado deportivo adecuado para la competencia'
            ],
            notAllowed: [
                '🚫 Competir sin camiseta',
                '🚫 Ropa transparente',
                '🚫 Ropa con mensajes u imágenes ofensivas'
            ]
        },
        additional: [
            '🏷️ Portar el número o identificación asignada',
            '👟 Calzado apropiado para la superficie de competencia',
            '🏛️ Representas a la universidad dentro y fuera de la pista',
            '👨‍⚖️ Los jueces podrán solicitar cambio de prendas inapropiadas'
        ]
    },

    schedule: {
        inauguration: [
            { time: '07:00', activity: '🛡️ Video de introducción de seguridad', venue: 'Aula Magna' },
            { time: '07:01', activity: '👋 Bienvenida oficial a las delegaciones', venue: 'Aula Magna' },
            { time: '07:03', activity: '🙏 Oración institucional', venue: 'Aula Magna' },
            { time: '07:08', activity: '📢 Palabras de autoridades', venue: 'Aula Magna' },
            { time: '07:13', activity: '🌟 Conferencia motivacional', venue: 'Aula Magna' },
            { time: '07:43', activity: '🏅 Reconocimiento a oradores', venue: 'Aula Magna' },
            { time: '07:46', activity: '🏁 Invitación a campos deportivos', venue: 'Aula Magna' }
        ],
        football: [
            { time: '08:00', activity: '⚽ Partido Preparatorio P1', venue: 'Cuadrante A' },
            { time: '08:00', activity: '⚽ Partido Preparatorio P2', venue: 'Cuadrante B/C/D' },
            { time: '08:20', activity: '⚽ Mercadotecnia Diario vs. Hotelería', venue: 'Cuadrante A' },
            { time: '08:20', activity: '⚽ Admón. Diario vs. Mercadotecnia PFS', venue: 'Cuadrante B/C/D' },
            { time: '08:30', activity: '⚽ Sistemas vs. Auditoría Diario', venue: 'Cuadrante A' },
            { time: '08:30', activity: '⚽ Visita Médica vs. Admón. PFS', venue: 'Cuadrante B/C/D' },
            { time: '09:00', activity: '⚽ Selección Diario vs. Hotelería', venue: 'Cuadrante A' },
            { time: '09:00', activity: '⚽ Selección PFS vs. Sistemas', venue: 'Cuadrante B/C/D' },
            { time: '09:30', activity: '🏆 Semifinal GP1 vs. GP2', venue: 'Cuadrante A' },
            { time: '09:30', activity: '🏆 Semifinal GP3 vs. GP4', venue: 'Cuadrante B/C/D' },
            { time: '10:00', activity: '🏆⚽ Final Femenina', venue: 'Cancha C' },
            { time: '10:30', activity: '🏆⚽ Final Masculina', venue: 'Cancha C' }
        ],
        athletics: [
            { time: '08:30', activity: '🏃 50m - Eliminatoria Femenil', venue: 'Pista 50m' },
            { time: '08:30', activity: '🏃 70m - Eliminatoria Femenil', venue: 'Pista 70m' },
            { time: '09:00', activity: '🏃 50m - Eliminatoria Masculina', venue: 'Pista 50m' },
            { time: '09:00', activity: '🏃 70m - Eliminatoria Masculina', venue: 'Pista 70m' },
            { time: '09:00', activity: '🏃 80m - Eliminatoria Masculina', venue: 'Pista 80m' },
            { time: '09:30', activity: '🏃 50m - Eliminatoria Masculina', venue: 'Pista 50m' },
            { time: '09:30', activity: '🏃 70m - Eliminatoria Masculina', venue: 'Pista 70m' },
            { time: '09:30', activity: '🏃 80m - Eliminatoria Masculina', venue: 'Pista 80m' },
            { time: '10:00', activity: '🏆🏃 Finales 50m, 70m y 80m', venue: 'Pistas' }
        ],
        basketball: [
            { time: '08:00', activity: '🏀 Mercadotecnia Diario vs. Hotelería', venue: 'Cancha A' },
            { time: '08:00', activity: '🏀 Admón. Diario vs. Mercadotecnia PFS', venue: 'Cancha B' },
            { time: '08:30', activity: '🏀 Sistemas vs. Auditoría Diario', venue: 'Cancha A' },
            { time: '08:30', activity: '🏀 Visita Médica vs. Admón. PFS', venue: 'Cancha B' },
            { time: '09:00', activity: '🏀 Selección Diario vs. Hotelería', venue: 'Cancha A' },
            { time: '09:00', activity: '🏀 Selección PFS vs. Sistemas', venue: 'Cancha B' },
            { time: '10:00', activity: '🏆🏀 Final Femenina', venue: 'Cancha B' },
            { time: '10:30', activity: '🏆🏀 Final Masculina', venue: 'Cancha B' }
        ],
        swimming: [
            { time: '09:00', activity: '🏊 Eliminatoria Masculina', venue: 'Complejo Acuático' },
            { time: '09:30', activity: '🏊 Eliminatoria Femenina', venue: 'Complejo Acuático' },
            { time: '10:00', activity: '🏆🏊 Finales Individuales', venue: 'Complejo Acuático' },
            { time: '10:30', activity: '🏆🏊 Finales Relevos', venue: 'Complejo Acuático' }
        ],
        chess: [
            { time: '08:00', activity: '♟ Octavos de Final', venue: 'Aula Magna' },
            { time: '08:50', activity: '♟ Cuartos de Final', venue: 'Aula Magna' },
            { time: '09:50', activity: '🏆♟ Final', venue: 'Aula Magna' },
            { time: '10:50', activity: '♟ Partidas Amistosas', venue: 'Aula Magna' }
        ],
        awards: [
            { time: '11:30', activity: '🏆 Premiación Fútbol', venue: 'Campo de Fútbol' },
            { time: '11:30', activity: '🏆 Premiación Atletismo', venue: 'Pista' },
            { time: '11:30', activity: '🏆 Premiación Básquetbol', venue: 'Canchas Techadas' },
            { time: '11:30', activity: '🏆 Premiación Natación', venue: 'Canchas Techadas' },
            { time: '11:30', activity: '🏆 Premiación Ajedrez', venue: 'Aula Magna' }
        ]
    }
};