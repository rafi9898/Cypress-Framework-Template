import FeedbackPage from '../../page-objects/pages/FeedbackPage'

describe('Feedback Test using Fixtures', () => {
	before(() => {
		FeedbackPage.load()
	})

	it('should submit feedback form', () => {
		FeedbackPage.submitFeedback()
	})
})
