import { useState, useRef, useEffect } from 'react';
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiTwitter, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';
import { FaDiscord, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from '../../styles/Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const formRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Add animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email Me',
      text: 'Feel free to reach out for collaboration or just to say hi!',
      items: [
        { text: 'itarqosdev@gmail.com', href: 'mailto:itarqosdev@gmail.com' }
      ]
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      text: 'Based in',
      items: [
        { text: 'Morocco', href: '#' }
      ]
    },
    {
      icon: <FaDiscord />,
      title: 'Discord',
      text: 'Connect with me on',
      items: [
        { text: 'itarqos5', href: 'https://discord.com/user/1184539864360816772' }
      ]
    }
  ];

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/itarqos5', label: 'GitHub' },
    { icon: <FiTwitter />, href: 'https://x.com/itarqos', label: 'Twitter' }
  ];

  return (
    <section id="contact" className={styles.contactSection} ref={contactRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.subtitle}>
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>
        
        <div className={styles.contactContent}>
          {/* Contact Information */}
          <div className={styles.contactInfo}>
            {contactInfo.map((item, index) => (
              <div key={index} className={styles.contactCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>
                    {item.icon}
                  </div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                </div>
                <p className={styles.contactText}>
                  {item.text} {item.title === 'Location' || item.title === 'Discord' ? item.items[0].text : ''}
                </p>
                {item.items && item.title !== 'Location' && item.title !== 'Discord' && (
                  <ul className={styles.contactList}>
                    {item.items.map((link, linkIndex) => (
                      <li key={linkIndex} className={styles.contactItem}>
                        <a 
                          href={link.href} 
                          className={styles.contactLink}
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          {item.icon}
                          <span>{link.text}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            
            <div className={`${styles.contactCard} ${styles.socialCard}`}>
              <h3 className={styles.cardTitle}>Connect With Me</h3>
              <p className={styles.contactText}>
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={styles.contactForm}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon} style={{ background: 'linear-gradient(135deg, #8b5cf6, #ec4899)' }}>
                <FiMessageSquare />
              </div>
              <h3 className={styles.cardTitle}>Send Me a Message</h3>
            </div>
            
            <form onSubmit={handleSubmit} ref={formRef}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  Your Name
                </label>
                <div className={styles.inputGroup}>
                  <span className={styles.inputIcon}><FiUser /></span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.formControl}
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email Address
                </label>
                <div className={styles.inputGroup}>
                  <span className={styles.inputIcon}><FiMail /></span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.formControl}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={styles.formControl}
                  placeholder="How can I help you?"
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${styles.formControl} ${styles.textarea}`}
                  placeholder="Hi there, I'd like to talk about..."
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <span className={styles.spinner}></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className={styles.btnIcon} />
                    Send Message
                  </>
                )}
              </motion.button>
              
              {submitSuccess && (
                <motion.div 
                  className={styles.successMessage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className={styles.successIcon}>✓</div>
                  <div>
                    <h4>Message Sent!</h4>
                    <p>Thank you for reaching out. I'll get back to you soon!</p>
                  </div>
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
