import React from 'react';

const Button = ({ styleType, buttonText }) => {
  const styles = {
    style1: {
      color: 'var(--complement-white, #FFF)',
      fontFamily: 'Zilla Slab',
      fontSize: '17px',
      fontStyle: 'normal',
      fontWeight: '400',
      padding: '0.4rem 1.5rem',
      lineHeight: '160%',
      letterSpacing: '0.6px',
      textTransform: 'uppercase',
      borderRadius: '100px',
      background: 'var(--complement-ruined-smores, #0C0D12)'
    },
    style2: {
      color: 'var(--complement-ruined-smores, #0C0D12)',
      fontFamily: 'Zilla Slab',
      fontSize: '17px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '160%',
      fontVariant: 'all-small-caps',
      letterSpacing: '0.6px',
      display: 'flex',
      background: "transparent",
      padding: '0.4rem 1.5rem',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '8px',
      borderRadius: '30px',
      border: '1px solid var(--based-color-peanut-butter-crust, #C9A489)'
    },
    style3: {
      borderRadius: '30px',
      border: '1px solid var(--complement-white, #FFF)',
      color: 'var(--complement-white, #FFF)',
      fontFamily: 'Zilla Slab',
      background: "transparent",
      textTransform: 'uppercase',
      padding: '0.4rem 1.5rem',
      fontSize: '15px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '160%',
      letterSpacing: '0.42px'
    }
  };

  return (
    <button style={styles[styleType]}>
      {buttonText}
    </button>
  );
};

export default Button;
