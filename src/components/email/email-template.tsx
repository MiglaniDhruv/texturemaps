import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  message,
}) => (
  <div style={{ 
    backgroundColor: '#031221', 
    padding: '40px 20px', 
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' 
  }}>
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: '#06182c', 
      borderRadius: '16px',
      border: '1px solid #0772DC', 
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(7, 114, 220, 0.2)'
    }}>
      {/* Header Section */}
      <div style={{ 
        backgroundColor: '#0772DC', 
        padding: '20px', 
        textAlign: 'center' 
      }}>
        <h1 style={{ 
          color: '#ffffff', 
          margin: '0', 
          fontSize: '24px', 
          fontWeight: 'bold',
          letterSpacing: '1px'
        }}>
          New Inquiry
        </h1>
      </div>

      {/* Content Section */}
      <div style={{ padding: '30px', color: '#ffffff' }}>
        <p style={{ 
          fontSize: '16px', 
          color: '#cccccc', 
          marginBottom: '30px', 
          marginTop: '0' 
        }}>
          You have received a new message from your website contact form.
        </p>

        {/* Name Field */}
        <div style={{ marginBottom: '20px' }}>
          <p style={{ 
            fontSize: '12px', 
            textTransform: 'uppercase', 
            color: '#0772DC', 
            fontWeight: 'bold', 
            marginBottom: '5px',
            marginTop: '0' 
          }}>
            Name
          </p>
          <p style={{ 
            fontSize: '18px', 
            margin: '0', 
            color: '#ffffff', 
            fontWeight: "bold"
          }}>
            {name}
          </p>
        </div>

        {/* Email Field */}
        <div style={{ marginBottom: '20px' }}>
          <p style={{ 
            fontSize: '12px', 
            textTransform: 'uppercase', 
            color: '#0772DC', 
            fontWeight: 'bold', 
            marginBottom: '5px',
            marginTop: '0' 
          }}>
            Email Address
          </p>
          <p style={{ 
            fontSize: '18px', 
            margin: '0', 
            color: '#ffffff' 
          }}>
            <a href={`mailto:${email}`} style={{ color: '#ffffff', textDecoration: 'none' }}>
              {email}
            </a>
          </p>
        </div>

        {/* Divider */}
        <hr style={{ 
          border: 'none', 
          borderTop: '1px solid #1a3a5a', 
          margin: '25px 0' 
        }} />

        {/* Message Field */}
        <div>
          <p style={{ 
            fontSize: '12px', 
            textTransform: 'uppercase', 
            color: '#0772DC', 
            fontWeight: 'bold', 
            marginBottom: '10px',
            marginTop: '0' 
          }}>
            Message
          </p>
          <div style={{ 
            backgroundColor: '#031221', 
            padding: '20px', 
            borderRadius: '8px', 
            border: '1px solid #1a3a5a' 
          }}>
            <p style={{ 
              fontSize: '16px', 
              lineHeight: '1.6', 
              color: '#e0e0e0', 
              margin: '0', 
              whiteSpace: 'pre-wrap' 
            }}>
              {message}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ 
        backgroundColor: '#020d17', 
        padding: '15px', 
        textAlign: 'center', 
        borderTop: '1px solid #0772DC' 
      }}>
        <p style={{ 
          fontSize: '12px', 
          color: '#5a7a9a', 
          margin: '0' 
        }}>
          © 2025 Texture Maps. All rights reserved.
        </p>
      </div>
    </div>
  </div>
);