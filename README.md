# EnergyWise
(submission for SUSTAINOVATION 2025)
A senior-friendly energy management interface designed to help elderly users easily monitor and control their electricity consumption. This frontend demonstration showcases an accessible, intuitive platform that empowers seniors to manage their energy usage independently and confidently.

##  Project Overview

EnergyWise addresses a critical gap in energy management technology by creating an interface specifically designed for elderly users. With large text, simple navigation, clear visuals, and voice assistance capabilities, this **proof-of-concept frontend application** demonstrates how technology can be made accessible to seniors who often struggle with complex digital interfaces.

##  Why EnergyWise Matters for Seniors

Many elderly people face unique challenges with electricity management:
- **Difficulty reading small text** on complex energy meters and bills
- **Confusion with digital interfaces** and multiple navigation menus
- **Physical limitations** that make it hard to check multiple rooms or appliances
- **Cognitive challenges** in understanding complex data and graphs
- **Fixed incomes** making energy cost monitoring crucial
- **Safety concerns** about leaving appliances on accidentally
- **Living alone** without immediate help for technical issues

EnergyWise makes energy management simple, safe, and stress-free for elderly users.

##  Senior-Friendly Features (Frontend Demo)

### Accessibility-First Design
- **Large, Readable Text** - High contrast and adjustable font sizes
- **Simple Navigation** - Minimal clicks, clear buttons with text labels
- **Visual Clarity** - Clean layouts with plenty of white space
- **Color-Coded Alerts** - Easy-to-understand traffic light system (Red/Yellow/Green)
- **Icon-Based Interface** - Intuitive symbols alongside text labels

### Key Functionalities
- **At-a-Glance Dashboard** - See current usage and costs without scrolling
- **Simple Device Cards** - Large, clear cards showing which appliances are on/off
- **Voice Commands** (Demo) - Control and query energy usage hands-free
- **Emergency Alerts** - Clear warnings for unusual consumption patterns
- **One-Click Controls** - Turn off all non-essential devices with a single button
- **Monthly Budget Tracker** - Easy-to-read progress bar showing spending vs. budget

### Safety Features
- **Appliance Status** - Visual indicators showing what's currently running
- **Reminder System** - Gentle notifications for devices left on too long
- **Emergency Contact** - Quick access to family members or support
- **Scheduled Reminders** - Automatic prompts to turn off appliances before bed

##  Technologies Used

### Frontend Stack
- **HTML5** - Semantic, accessible markup
- **CSS3** - Large touch-friendly buttons, high contrast themes
- **TypeScript** - Simple, intuitive interactions
- **NextJs/React(Core UI)** - Component-based architecture
- **Tailwind CSS** - Responsive design
- **shadcn/ui Progress Component** - Simple, clear data visualization
  ```bash
  <Progress value={monthlyProgress} className="h-4" />
  ```
- Lucid React - For Icons pack
- **Web Accessibility Standards (WCAG 2.1 Level AA)** - Ensuring usability for all

### Accessibility Features
- **Screen Reader Compatible** - Full ARIA labels and semantic HTML
- **Keyboard Navigation** - Complete functionality without mouse
- **Touch-Friendly** - Large buttons (minimum 44x44px)
- **Voice Command Ready** - Structure for voice assistant integration

##  Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- [Node.js](https://nodejs.org/) (if using a build tool)

### Installation & Running

1. Clone the repository
```bash
git clone https://github.com/krishna2426/EnergyWise.git
cd EnergyWise
```

2. If using a development server:
```bash
npm install
npm start
```

3. Or simply open `index.html` in your browser:
```bash
open index.html
```

##  Large-Scale Implementation Potential

### For Elderly Individuals & Families

**Independent Living Support**
- Enable seniors to age in place with confidence in managing their homes
- Reduce anxiety about electricity bills and appliance safety
- Provide family members peace of mind with remote monitoring capabilities
- Early detection of cognitive decline through unusual usage patterns

**Financial Protection**
- Help seniors on fixed incomes avoid unexpected high bills
- Identify energy-wasting appliances to reduce monthly costs
- Simple budgeting tools that make sense at a glance
- Fraud detection for unusual consumption that might indicate meter tampering

**Safety & Health Monitoring**
- Detect if refrigerator stops working (medication spoilage prevention)
- Alert family if stove is left on for extended periods
- Monitor heating/cooling to prevent temperature-related health issues
- Track activity patterns through appliance usage (wellness indicator)

### For Senior Living Communities & Care Facilities

**Facility Management**
- Monitor energy across multiple residential units from a central dashboard
- Identify units with unusual patterns requiring wellness checks
- Reduce operational costs while maintaining resident comfort
- Automated alerts for maintenance issues

**Resident Independence**
- Give residents control over their own spaces
- Reduce staff burden for routine energy management
- Provide families with transparent usage data
- Support residents with varying levels of cognitive ability

### For Healthcare & Social Services

**Aging-in-Place Programs**
- Integrate with telehealth and remote care monitoring systems
- Provide social workers with insights into client wellbeing
- Support independent living programs with data-driven interventions
- Reduce hospital readmissions through better home environment monitoring

**Cognitive Health Assessment**
- Track changes in routine behaviors through appliance usage
- Early detection of dementia or cognitive decline
- Non-intrusive monitoring that respects privacy
- Data for healthcare providers to make informed decisions

### For Utility Companies & Government Programs

**Senior Assistance Programs**
- Identify seniors who qualify for energy assistance
- Proactive outreach to vulnerable customers during extreme weather
- Simplified billing interfaces for elderly customers
- Educational programs on energy saving tailored to seniors

**Public Health Initiatives**
- Prevent heat stroke and hypothermia through temperature monitoring
- Emergency response during power outages or natural disasters
- Support for low-income seniors with energy affordability
- Reduce social isolation through family connectivity features

### Economic & Social Impact at Scale

**Cost Savings**
- Average 20-30% reduction in energy bills for senior households
- Reduced emergency room visits from preventable home incidents
- Lower costs for assisted living through extended independent living
- Decreased burden on social services and healthcare systems

**Quality of Life**
- Increased confidence and independence for elderly users
- Reduced stress and anxiety about home management
- Better family connectivity and peace of mind
- Enhanced safety and security in daily living

**Healthcare Integration**
- Early intervention before health crises occur
- Reduced hospital readmissions
- Lower long-term care costs
- Better outcomes for aging populations

##  Senior-Centered Design Principles

### Visual Design
- **Minimum font size**: 18px (adjustable up to 24px)
- **High contrast ratios**: 7:1 for normal text, 4.5:1 for large text
- **Touch targets**: Minimum 44x44px for all interactive elements
- **Consistent layout**: Same navigation pattern on every page
- **Minimal scrolling**: Key information visible without scrolling

### Interaction Design
- **Simple language**: No technical jargon, clear instructions
- **Forgiving interface**: Easy undo, confirmation dialogs for important actions
- **Progress indicators**: Clear feedback for all actions
- **Error prevention**: Warnings before potentially problematic actions
- **Help always visible**: Context-sensitive help on every screen

### Content Strategy
- **Action-oriented labels**: "Turn Off Lights" instead of "Lighting Control"
- **Real-world terminology**: "Kitchen Refrigerator" instead of "Device #3"
- **Visual cues**: Icons that match real-world appliances
- **Positive reinforcement**: Celebrating energy-saving achievements
- **Clear value proposition**: "Save $15 this month" instead of "200 kWh saved"

##  Future Enhancements

### Backend Development
- [ ] Real-time smart meter integration
- [ ] Family member remote access portal
- [ ] Cloud-based data storage and backup
- [ ] Emergency notification system
- [ ] Integration with medical alert systems

### Advanced Features
- [ ] AI-powered anomaly detection for safety alerts
- [ ] Voice assistant integration (Alexa, Google Home)
- [ ] Video call integration for family check-ins
- [ ] Medication reminder integration
- [ ] Smart home device control (thermostats, lights)
- [ ] Fall detection through unusual appliance patterns
- [ ] Weather-based heating/cooling recommendations

### Accessibility Enhancements
- [ ] Multiple language support
- [ ] Text-to-speech for all content
- [ ] Speech-to-text for voice commands
- [ ] High contrast and low vision modes
- [ ] Customizable color themes for color blindness
- [ ] Simplified mode for users with cognitive challenges

### Family Features
- [ ] Multi-user access with role-based permissions
- [ ] Activity reports for family members
- [ ] Scheduled check-in reminders
- [ ] Caregiver notification system
- [ ] Shared shopping lists and reminders

##  User Interface Highlights

The demo showcases senior-friendly interfaces for:

1. **Home Screen** - Big buttons, current usage, and today's cost
2. **My Appliances** - Visual cards showing what's on/off with photos
3. **Budget Tracker** - Simple bar showing spending vs. monthly budget
4. **Alerts** - Clear notifications with suggested actions
5. **Emergency Button** - One-tap access to turn off all devices
6. **Help Center** - Video tutorials and phone support access

##  Contributing

This project welcomes contributions focused on improving accessibility:
- Accessibility testing with actual elderly users
- UI/UX improvements for senior usability
- Localization and language support
- Documentation and user guides

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AccessibilityImprovement`)
3. Commit your changes (`git commit -m 'Improve button contrast'`)
4. Push to the branch (`git push origin feature/AccessibilityImprovement`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Krishna**
- GitHub: [@krishna2426](https://github.com/krishna2426)

##  Vision

EnergyWise envisions a world where age is never a barrier to technology. By creating accessible, intuitive interfaces specifically designed for elderly users, we can empower seniors to live independently, safely, and confidently while managing their homes. This frontend demo is the first step toward building technology that serves all generations with dignity and respect.

##  Contact

Interested in implementing this for senior communities or contributing to senior-focused tech? Reach out via:
- GitHub Issues
- Pull Requests
- krishnakr3009@gmail.com

##  Acknowledgments

- The Idea was taken from a hackathon which was Sustainovation 2025
- Designed with input from elderly users and caregivers
- Built following WCAG 2.1 Level AA accessibility standards
- Inspired by the need to make technology inclusive for all ages

---

**Note**: This is a frontend demonstration project. Full implementation would require backend infrastructure, smart home integrations, and partnerships with utility providers and senior care organizations.

*Empowering seniors through accessible technology* 👵👴
