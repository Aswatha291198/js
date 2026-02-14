function attachClickLogger(buttonId) {
      const buttonName = `Button-${buttonId}`;

      document
        .getElementById(buttonId)
        .addEventListener('click', () => {
          console.log(buttonName, 'clicked');
        });
    }

    attachClickLogger('saveBtn');