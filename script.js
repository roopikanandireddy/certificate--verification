// Certificate Database
const certificates = {
    'GNU00250': {
        name: 'Ashish Kumar',
        department: 'UIET-CSE',
        institute: 'GNU',
        status: 'Active'
    },
    'GNIT0853': {
        name: 'D.Swetha',
        department: 'AI&DS',
        institute: 'GNIT',
        status: 'Active'
    },
    'GNIT0767': {
        name: 'I.Sai Kumar',
        department: 'CSE',
        institute: 'GNIT',
        status: 'Active'
    },
    'GNU00369': {
        name: 'Dr.Golam Biswas',
        department: 'MATHEMATICS',
        institute: 'GNU',
        status: 'Active'
    },
    'GNITC02676': {
        name: 'G.Ashwini Ramesh',
        department: 'CSE',
        institute: 'GNITC',
        status: 'Active'
    },
    'GNU00323': {
        name: 'Mr.Tahir Ahmad Bhat',
        department: 'CSE(AIML)',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00398': {
        name: 'Dr.Tafaz Ul Rahman Shah',
        department: 'UIEMT',
        institute: 'GNU',
        status: 'Active'
    },
    'GNIT0929': {
        name: 'P.Esther Rani',
        department: 'AIML',
        institute: 'GNIT',
        status: 'Active'
    },
    'GNITC02461': {
        name: 'Benda Hari Kumar',
        department: 'CSE',
        institute: 'GNITC',
        status: 'Active'
    },
    'GNU00273': {
        name: 'CH.Jeevan Kumar',
        department: 'MECH',
        institute: 'GNU',
        status: 'Active'
    },
    'GNIT0949': {
        name: 'Keshavadas Priyanka',
        department: 'IT',
        institute: 'GNIT',
        status: 'Active'
    },
    'GNU00349': {
        name: 'Mr.Rameez Raja',
        department: 'CSE',
        institute: 'GNU',
        status: 'Active'
    },
    'GNITC02568': {
        name: 'Vara Prasad Dasari',
        department: 'CSE',
        institute: 'GNITC',
        status: 'Active'
    },
    'GNIT0845': {
        name: 'Rupinder Saini',
        department: 'CYBER SECURITY',
        institute: 'GNIT',
        status: 'Active'
    },
    'GNU00335': {
        name: 'Supriya Kumar Paul',
        department: 'HUMANITIES & SCIENCES',
        institute: 'GNU',
        status: 'Active'
    },
    'GNIT0606': {
        name: 'G.Manoj',
        department: 'CSE',
        institute: 'GNIT',
        status: 'Active'
    },
    'GNU00166': {
        name: 'Kankanala Uma Latha',
        department: 'CSE',
        institute: 'GNITC',
        status: 'Active'
    },
    'GNU00396': {
        name: 'Gardas Bindu Priya',
        department: 'CSE',
        institute: 'GNU',
        status: 'Active'
    },
    'GNOIT0850': {
        name: 'Chintala Srikanth',
        department: 'IT',
        institute: 'GNIT',
        status: 'Active'
    },
    'GNU00308': {
        name: 'M.Stalin Babu',
        department: 'ECE',
        institute: 'GNU',
        status: 'Active'
    },
    'GNITC0230': {
        name: 'Madde Kumar',
        department: 'CSE(IOT)',
        institute: 'GNITC',
        status: 'Active'
    },
    'GNITC02069': {
        name: 'P.Sambasivarao',
        department: 'AIML',
        institute: 'GNITC',
        status: 'Active'
    },
    'GNIT0240': {
        name: 'Kavali Shekhar',
        department: 'CSE(CS)',
        institute: 'GNIT',
        status: 'Active'
    },
    'GNIT0723': {
        name: 'Mohammad Moin',
        department: 'CSE(CS)',
        institute: 'GNIT',
        status: 'Active'
    },
    'GNU00400': {
        name: 'Tanveer Babar Ali Khan',
        department: 'ENGLISH',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00314': {
        name: 'Syed Rizwan Ahmed',
        department: 'AGRICULTURE',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00381': {
        name: 'Subhankar Chakraborty',
        department: 'ECE',
        institute: 'GNU',
        status: 'Active'
    },
    'GNITC02765': {
        name: 'V.Prathyusha',
        department: 'CSE',
        institute: 'GNITC',
        status: 'Active'
    },
    'GNU00276': {
        name: 'P.Vamshi Krishna',
        department: 'MBA-UIET',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00185': {
        name: 'Manpreet Kaur',
        department: 'ECE',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00228': {
        name: 'Nagender',
        department: 'CSE',
        institute: 'GNITC',
        status: 'Active'
    },
    'GNU00284': {
        name: 'Avinash Kumar',
        department: 'Mechanical Engineering',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00293': {
        name: 'Mr.S.Rajasheker',
        department: 'ECE',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00307': {
        name: 'Saggurthi Rajesh',
        department: 'ECE',
        institute: 'GNU',
        status: 'Active'
    },
    'GNIT0941': {
        name: 'J Shirisha',
        department: 'AIML',
        institute: 'GNITC',
        status: 'Active'
    },
    'GNU00415': {
        name: 'Mir Irtiqa Farooq',
        department: 'CSE',
        institute: 'GNU',
        status: 'Active'
    },
    'GNITC02173': {
        name: 'Aaqib Rashid Mir',
        department: 'CSE(DS)',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00149': {
        name: 'Dr.Jhansi Lakshmi',
        department: 'BIOTECHNOLOGY',
        institute: 'GNU',
        status: 'Active'
    },
    'GNIT0932': {
        name: 'Dorepalli Pavan Kumar',
        department: 'IT',
        institute: 'GNIT',
        status: 'Active'
    },
    'GNU00420': {
        name: 'Dr.Hassan Ali',
        department: 'Intellipaat-Mathematics',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00295': {
        name: 'Dr.Prodduturi Ashok Kumar',
        department: 'Mechanical',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00226': {
        name: 'Dr.K.Chinna Ashalu',
        department: 'CHEMISTRY',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00401': {
        name: 'Dr.Madeeha',
        department: 'ENGLISH',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00302': {
        name: 'Dr.Rayees Ahmad Zargar',
        department: 'PHYSICS',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00183': {
        name: 'Dr.P.Rajitha Nair',
        department: 'ENGLISH',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00298': {
        name: 'Mounica Pulivarthi',
        department: 'UICSA',
        institute: 'GNU',
        status: 'Active'
    },
    'GNIT0842': {
        name: 'Asha simon',
        department: 'GNIT',
        institute: 'GNIT',
        status: 'Active'
    },
    'GNU00394': {
        name: 'Dr.Arshad Ahmad Khan',
        department: 'UIEMT-MATHEMATICS',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00148': {
        name: 'Mrs.R.Purrnimaa Shiva Sakthi',
        department: 'ECE',
        institute: 'GNU',
        status: 'Active'
    },
    'GNITC02748': {
        name: 'B.Pandya Naik',
        department: 'CSE',
        institute: 'GNITC',
        status: 'Active'
    },
    'GNU00288': {
        name: 'Dr.Harish Kundra',
        department: 'CSE',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00198': {
        name: 'Dr.M.Anjaneyulu',
        department: 'MATHEMATICS',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00346': {
        name: 'Dr.R P Sreedevi',
        department: 'MATHEMATICS',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00346': {
        name: 'Mr.Venkata Siva Ram Krishna Palacharla',
        department: 'AIML',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00150': {
        name: 'Dr.Prafulla Kumar',
        department: 'BIOTECHNOLOGY',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00152': {
        name: 'Ms.Mariya Hassan',
        department: 'CSE',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00157': {
        name: 'Dr.Souvik Pandit',
        department: 'CHEMISTRY',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00177': {
        name: 'Dr.Nikesh Thakur',
        department: 'PHYSICS',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00178': {
        name: 'Mrs.Geetha Kurikala',
        department: 'CSE(AIML)',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00248': {
        name: 'Ms.Adfar Qasim',
        department: 'CSE',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00256': {
        name: 'Mr.Sumit Kumar Pushkar',
        department: 'CSE(AIML)',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00259': {
        name: 'DR.M.Latha',
        department: 'CHEMISTRY',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00263': {
        name: 'Mr.Imtiyaz Ahmad Wani',
        department: 'CSE',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00267': {
        name: 'Ms.Sonal Singh',
        department: 'CSE',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00283': {
        name: 'Mrs.K.Sri Divya',
        department: 'CSE',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00299': {
        name: 'Ms.Rafia Shabir',
        department: 'ENGLISH',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00290': {
        name: 'Ms.Anshu Priya',
        department: 'MGMT',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00292': {
        name: 'Dr.Ankur Saxena',
        department: 'ECE',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00297': {
        name: 'K.Padma',
        department: 'ECE',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00303': {
        name: 'Dr.Reena Devi',
        department: 'MATHEMATICS',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00320': {
        name: 'Ms.Lavi Varma',
        department: 'AIML',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00322': {
        name: 'Mr.Agniprabhas Biswas',
        department: 'AIML',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00324': {
        name: 'Dr.Sanjeev Kumar',
        department: 'PHYSICS',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00348': {
        name: 'Dr.Aadil Zeffer',
        department: 'ENGLISH',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00358': {
        name: 'Dr.Ramesh Banoth',
        department: 'PHYSICAL EDUCATION',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00363': {
        name: 'Mr.Sanchari Banerjee',
        department: 'INTELLIPAAT',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00361': {
        name: 'Ms.Pritha Mandal',
        department: 'INTELLIPAAT',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00362': {
        name: 'Mr.Yogesh Trivedi',
        department: 'INTELLIPAAT',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00380': {
        name: 'Ms.Ishwariya',
        department: 'AIML',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00387': {
        name: 'Dr.K.Ramaiah',
        department: 'CHEMISTRY',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00394': {
        name: 'Dr.Arshad Ahmad Khan',
        department: 'MATHEMATICS',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00416': {
        name: 'Dr.Sandhya Rani',
        department: 'BIOTECHNOLOGY',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00419': {
        name: 'Ms.V.Anjali Priyanka',
        department: 'INTELLIPAAT',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00289': {
        name: 'Ms.S.Sai Sravani',
        department: 'AIML',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00300': {
        name: 'Ms.D.Harika',
        department: 'AIML',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00319': {
        name: 'Ms.Sristi Kumari',
        department: 'AIML',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00331': {
        name: 'Ms.Ganduri Varalaxmi',
        department: 'BIOTECHNOLOGY',
        institute: 'GNU',
        status: 'Active'
    },
    'GNU00336': {
        name: 'Ms.T.Yashwitha',
        department: 'AIML',
        institute: 'GNU',
        status: 'Active'
    },
    
    'GNU00343': {
        name: 'Ms.Banda Meena',
        department: 'AIML',
        institute: 'GNU',
        status: 'Expired'
    }
};

function verifyCertificate() {
    const registrationID = document.getElementById('registrationID').value.trim().toUpperCase();
    const detailsSection = document.getElementById('detailsSection');
    const errorSection = document.getElementById('errorSection');
    const errorMessage = document.getElementById('errorMessage');

    // Reset sections
    detailsSection.style.display = 'none';
    errorSection.style.display = 'none';

    // Validate input
    if (!registrationID) {
        errorMessage.textContent = '⚠️ Please enter a Registration ID';
        errorSection.style.display = 'block';
        return;
    }

    // Search for certificate
    if (certificates[registrationID]) {
        const cert = certificates[registrationID];
        
        // Populate details
        document.getElementById('studentName').textContent = cert.name;
        document.getElementById('department').textContent = cert.department;
        document.getElementById('institute').textContent = cert.institute;
        document.getElementById('status').textContent = cert.status;

        // Show details section
        detailsSection.style.display = 'block';

        // Scroll to details
        detailsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        errorMessage.textContent = '❌ Certificate not found. Please check your Registration ID and try again.';
        errorSection.style.display = 'block';
    }
}

function resetForm() {
    document.getElementById('registrationID').value = '';
    document.getElementById('detailsSection').style.display = 'none';
    document.getElementById('errorSection').style.display = 'none';
    document.getElementById('registrationID').focus();
}

// Allow Enter key to verify
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationID').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            verifyCertificate();
        }
    });
});

// Test Registration IDs:
// REG001, REG002, REG003, REG004