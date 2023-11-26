describe('UI End-to-End Test', () => {
  it('Connects to the application', () => {
    cy.visit('localhost:3000')
    cy.viewport(1200, 800)
  })
  it('Renders the default screen elements', () => {
    cy.visit('localhost:3000')
    cy.viewport(1200, 800)
    //cy.get('[data-testid="Vtunes_Helmet"]').should("exist");
    cy.get('.rhap_main-controls-button').should("exist");
    cy.get('.rhap_play-pause-button').should("exist");
    cy.get('.rhap_volume-controls').should("exist");
    cy.get('.rhap_volume-button').should("exist");
    cy.get('.rhap_additional-controls').should("exist");
    cy.get('.rhap_progress-section').should("exist");
  })
  it('Loads file and plays the music', () => {
    cy.visit('localhost:3000')
    cy.viewport(1200, 800)
    

    cy.get('[cypress-testid="adder_button"]')
        .should("exist")
    //cy.get('input[type="file"]').selectFile('cypress/fixtures/01. Attention.mp3', {force: true})

    cy.get('[cypress-testid="remover_button"]')
        .should("exist")
    
  })
  it('Creates and Removes playlist', () => {
    cy.visit('localhost:3000')
    cy.viewport(1200, 800)
  
    cy.get('[cypress-testid="playlist_menu"]')
        .should("exist")
        .click();
    cy.get('[cypress-testid="new_playlist_button"]')
        .should("exist")
        .click();
    cy.get('[cypress-testid="playlist_name_input"]').type("Hello World");
    
    cy.get('[cypress-testid="confirm_button"]')
        .trigger("mouseover")
        .click()
  })
  it('Prints Invalid Playlist when input is empty', () => {
    cy.visit('localhost:3000')
    cy.viewport(1200, 800)

    cy.get('[cypress-testid="playlist_menu"]')
        .should("exist")
        .click();
    cy.get('[cypress-testid="new_playlist_button"]')
        .should("exist")
        .click();
    cy.get('[cypress-testid="confirm_button"]')
        .trigger("mouseover")
        .click()
  })
  
  it('Timer Control', () => {
    cy.visit('localhost:3000')
    cy.viewport(1200, 800)
    cy.get('[cypress-testid="timer_button"]')
        .should("exist")
        .click();
    cy.wait(1000);
    cy.get('[cypress-testid="timer_30min"]')
        .should("exist")
        .click();
    cy.wait(1000);
    cy.get('[cypress-testid="time_left"]')
        .should("exist")
        .trigger("mouseover")
        .click();
  })
  
  it('Modify Shuffle State', () => {
    cy.visit('localhost:3000')
    cy.viewport(1200, 800)
    cy.get('[cypress-testid="shuffle_button"]')
        .should("exist")
        .click()
  })

  it('Modify Repeat State', () => {
    cy.visit('localhost:3000')
    cy.viewport(1200, 800)
    cy.get('[cypress-testid="repeat_button"]')
        .should("exist")
        .click()
    cy.wait(1000)
    cy.get('[cypress-testid="repeat_button"]').click()
    cy.wait(1000)
    cy.get('[cypress-testid="repeat_button"]').click()
  })
  
  it('Modify Mute State', () => {
    cy.visit('localhost:3000')
    cy.viewport(1200, 800)
    cy.get('.rhap_volume-button').should("exist")
        .click()
    cy.wait(1000)
    cy.get('.rhap_volume-button').click();
  })
  
  it('Move volume pin', () =>{
    cy.visit('localhost:3000')
    cy.viewport(1200, 800)
    cy.get('.rhap_volume-indicator').should("exist").as('pin')
    /*cy.get('@pin').trigger('mousedown', { which: 1 }); // Start dragging
    cy.get('@pin').trigger('mousemove', { clientX: 10 }); // Drag to a specific position
    cy.get('@pin').trigger('mouseup'); // Drop the pin*/
    
  })
  
})