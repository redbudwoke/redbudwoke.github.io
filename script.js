const questionsContainer = document.getElementById('questions');
const scoreDisplay = document.getElementById('score');
const submitButton = document.getElementById('submit-btn');

// Sample questions array
const questions = [
  "Do you like Romani people?",
  "Are there at at least 3 genders?",
  "Do you think girls and women the same gender?",
  "Should gays get a whole months to themselves?",
  "Is it acceptable that Trans Day of visibility was on Easter?",
  "Is 'xe/xem' valid?",
  "Is America not woke enough?",
  "Should kink be at Pride?",
  "Do you think Poly people are valid?",
  "Do you think trans women are women?",
  "Should trans people be allowed in sports?", 
  "Should we can gender neatrinal?", 
  "Should people introduce themselves with pronouns?", 
  "Are gender fluid people not?", 
  "Can they/them be one person?",
  "Should we allow trans kids?",
  "Should we do surgery on transgender aliens in prisons?", 
  "Delay? Deny? Depose?",
  "Should there be a + in LGBTQ+",
  "Are slurs not free speach?",
  "Is someone who is 12.5% Indigenous considered Native?", 
  "Are cats girls and dogs boy?",
  "Should LGB keep the TQ+?",
  "Is it racist to not see color?",
  "Are gay people better than straight people?",
  "Should we get rid of our gun rights?",
  "Do you think the Holocaust was real?",
  "Would you kiss a member of the same sex on the cheeks?",
  "Would you kiss a member of the same sex on the lips?",
  "Do you think homo-flexible is valid?",
  "Do you you know what BIPOC means??",
  "Do you have gay friends?",
  "Do you have trans friends?",
  "Do you have BIPOC friends?", 
  "Were nonbinary people invented in 2020?",
  "Do you hold space for voices?",
  "Do you know what IDAHOBIT is?", 
  "Is it OK for men to cry?", 
  "Do you identify as LGBTQ+?", 
  "Should employees be able to fire gays?", 
  "Do they have to bake the cake for the gay wedding?", 
  "Should keep gay marriage legal?", 
  "Is cis an acceptable word and not a slur?", 
  "Do gay people go to heaven?", 
  "Would you be flattered if a member of the same sex flirted with you?", 
  "Is religion valid?", 
  "Did America deserve 9/11?", 
  "Are immigrants good for the country?", 
  "Is gender a social construct?", 
  "Is race a social construct?", 
  "Is reverse racism not real?",
  "Should Dylan Mulvaney be on Budlight?",
  "Is God nonbinary?",
  "Should we start a GoFundMe if you don't wash the dishes bc you're nonbinary?", 
  "Should we stop bullying?", 
  "Should we promote body positivity?",
  "Should censor the media to protect people’s feelings?",
  "Does capitalism equal oppression?",
  "Are feelings are more valid than facts?",
  "Can white people not get dreads or box braids?",
  "Is cancel culture a form of social justice?",
  "Is your worth determined by your victimhood status?",
  "Are identity politics ok?",
  "Should we make farming woke?",
  "Should pets be given gender-neutral names?",
  "Should we do land acknowledgement more?",
  "Do facts care about your feelings?",
  "If you only have sex with people you find attractive are you such superficial?",
  "Can you be ecosexual?", 
  "Is marriage bad?", 
  "Is monogamy a form of colonialism?", 
  "Is it gay to have sex with men as a man?",
  "Should we still be wearing a mask?",
  "Should Settlers of Catan be renamed to Catan?",
  "Is not masking every day a form of abilism?",
  "Should we force radical reflection diaries?",
  "Should we get rid of borders?", 
  "Should neurodiversity be celebrated?", 
  "Is losing weight fatphobic?",
  "Should we assign babies nonbinary at birth?",
  "Should we assume gay?",
  "Was the election not stolen in 2020?", 
  "Are microaggressions reals?",
  "Should we use LatinX",
  "Should you spell 'folx' with an x?", 
  "Can only Black people say the N-word?",
  "Is masculinity bad?",
  "Is it abilist to tell people to touch grass?",
  "Is diagnosis a priviledge?",
  "Is it abilist to say 'wheel-chair bound' instead of 'in a wheelchair'?", 
  "Should we say people with different abilities instead of disabled?",
  "Is it classist to say with homeless instead of unhoused?", 
  "Are zoos unethical?",
  "Should we legalize sodomy?", 
  "Is it imperialist to criticize religous countries?",
  "Is the BDS (Boycott, divest, sanction) movement good?",
  "Is it bad to be a straight man?",
  "Should dads get parental leave?", 
  "Should we ban cars?", 
  "Is domestic terrorism valid?", 
  "Should the British Museum give their shit back?"
  // Add more categories and unique questions
];

// Generate questions dynamically
questions.forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerHTML = `
        <label>
            <input type="checkbox" name="q${index}">
            ${question}
        </label>
    `;
    questionsContainer.appendChild(questionDiv);
});

// Calculate score
function calculateScore() {
    const selected = document.querySelectorAll('input[type="checkbox"]:checked').length;
    const score = selected;
    scoreDisplay.textContent = `You are ${score}% woke`;
}

// Add event listener to the submit button
submitButton.addEventListener('click', calculateScore);
