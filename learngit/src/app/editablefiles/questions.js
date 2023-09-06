const listItems = [
    {
      label: 'What is the purpose of Git?',
      a: 'Rice = UW',
      b: 'Web browser',
      c: 'File storage',
      d: 'Time machine for code. Track changes, collaborate seamlessly, and undo mistakes in your software projects',
    },
    {
      label: 'What is a Git repository?',
      a: 'A folder to store files',
      b: 'A place to host a website',
      c: 'A place to manage and store Git projects',
      d: 'A place to git some bitches',
    },
    {
      label: 'Which command is used to initialize a new Git repository?',
      a: 'Git clone',
      b: 'Git commit',
      c: 'Git init',
      d: 'rm -rf',
    },
    {
      label: 'How do you create a new branch in Git?',
      a: 'branch_name',
      b: 'Git create branch_name',
      c: 'Git branch branch_name',
      d: 'dm the TAs or sudo at 2 am in the morning asking for help',
    },
    {
      label: 'What is the purpose of the "git pull" command?',
      a: 'Retrieves changes from a remote repository and automatically merges them into the current branch',
      b: 'Pushes changes to a remote repository',
      c: 'Creates a new branch from the current branch',
      d: 'pulls bitches',
    },
    {
      label: 'How do you check the status of your Git repository and see which files have been modified?',
      a: 'Git log',
      b: 'Git status',
      c: 'Git diff',
      d: 'rm -r',
    },
    {
      label: 'How do you join these cohorts?',
      a: 'Be active on zero2sudo on Instagram and be active on the gram',
      b: 'Beg',
      c: 'Slide someone money on the low',
      d: 'give sudo gawk gawk'
    },
  ];
  
  export default function getQuestions() {
    return listItems;
  }
  