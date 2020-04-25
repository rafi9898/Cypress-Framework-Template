import BasePage from '../BasePage'

export default class FeedbackPage extends BasePage {
	static load() {
		cy.visit('http://zero.webappsecurity.com/feedback.html')
	}

	static submitFeedback() {
		cy.fixture('feedback').then(data => {
			const name = data.name
			const email = data.email
			const subject = data.subject
			const message = data.message

			cy.get('input#name').type(name)
			cy.get('input#email').type(email)
			cy.get('input#subject').type(subject)
			cy.get('textarea#comment').type(message)
			cy.contains('Send Message').click()
		})
	}
}
