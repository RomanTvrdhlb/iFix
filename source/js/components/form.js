import JustValidate from "just-validate";
import vars from '../_vars';
import {removeCustomClass, addCustomClass} from '../functions/customFunctions';

const {copyWrapper, form} = vars;

const regexp = /^[A-Za-z0-9]+$/;
const currentLink = 'http://domain.com/?utm_medium=ref&utm_campaign='

if (form) {
	const firstInput = form.querySelector('#wallet');
	const secondInput = form.querySelector('#code');
	const copyBtn = form.querySelector('.copy-button');


	const validator = new JustValidate('.referral-form', {
		validateBeforeSubmitting: true,
		submitFormAutomatically: true,
	});

	validator.addField('#wallet', [
		{
			rule: 'maxLength',
			value: 42,
			errorMessage: 'Maximum length - 42 characters!'
		},
		{
			rule: 'minLength',
			value: 42,
			errorMessage: 'Minimum length - 42 characters!'
		},
		{
			rule: 'customRegexp',
			value: regexp,
			errorMessage: 'Only numbers and English letters!'
		}
	]);

	firstInput.addEventListener('input', () => {
		if (firstInput.value.length === 42 && regexp.test(firstInput.value)) {
			secondInput.value = currentLink + firstInput.value;
			copyBtn.style.pointerEvents = 'initial';
		} else {
			secondInput.value = '';
			copyBtn.style.pointerEvents = 'none';
		}
	});

	const copyToClipboard = (text) => {
		navigator.clipboard.writeText(text)
				.then(() => {
					console.log('Copied to clipboard');
				})
				.catch(err => {
					console.error('Error while copying:', err);
				});
	};

	form.addEventListener('submit', (event) => {
		event.preventDefault();
		copyToClipboard(secondInput.value);
		addCustomClass(copyWrapper, 'active');


		setTimeout(() => {
			console.clear()
			firstInput.value = '';
			secondInput.value = '';
			removeCustomClass(copyWrapper, 'active');
		}, 3000);
	});

}




