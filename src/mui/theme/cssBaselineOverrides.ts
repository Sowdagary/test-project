/**
 * Since creating all font-faces takes lots of code lines, i placed them here for code organization.
 */
const CssBaselineOverrides = {
  styleOverrides: `
    body {
      font-family: Dirooz FD;
      color: black;
    }
    ::-webkit-scrollbar {
      display: none;
    }
    .foodieglobal-toast-holder {
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 111111;
      width: auto;
      max-width: 90%;
    }
    
    .foodieglobal-toast-holder .toast {
      padding: 16px;
      background-color: rgb(29, 29, 29);
      color: #fff;
      border-radius: 8px;
      opacity: 0;
      visibility: hidden;
      transition: 0.5s all;
      transform: translateY(8px);
      box-shadow: 0 2px 16px rgba(0, 0, 0, 0.15);
    }
    
    .foodieglobal-toast-holder .toast.show {
      opacity: 1;
      visibility: visible;
      transform: none;
    }
    
  `,
};

export default CssBaselineOverrides;
