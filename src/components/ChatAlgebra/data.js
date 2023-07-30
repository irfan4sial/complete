import { 
  CopyIcon, ImageIcon, CodeGenIcon, ContentGenIcon, IdeaGenIcon, AudioGenIcon,
  GebraIcon1, GebraIcon2
} from '../Icons';

export const GebraData = [
  {
    name: 'Ed Tech',
    desc: "Okay, let's explore some options related to Algebra. Here are some things I can do for you:",
    time: "just now",
    img: GebraIcon1,
    copyIcon: CopyIcon,
    responses: [],
    contents: [
      {
        name: 'Image generation',
        img: ImageIcon
      },
      {
        name: 'Code engineering',
        img: CodeGenIcon
      },
      {
        name: 'Content creation',
        img: ContentGenIcon
      },
      {
        name: 'Idea generation',
        img: IdeaGenIcon
      },
      {
        name: 'Audio/Video creation',
        img: AudioGenIcon
      }
    ]
  },
  {
    name: 'Tyler',
    desc: "What are some good beginner lessons for Algebra?",
    time: "4sec ago",
    img: GebraIcon2,
    copyIcon: CopyIcon,
    responses: [],
    contents: []
  },
  {
    name: 'Ed Tech',
    desc: "Algebra is a branch of mathematics that deals with symbols and the rules for manipulating those symbols to solve equations and analyze mathematical structures. It is a fundamental tool in various fields, including mathematics itself, physics, engineering, economics, and computer science. Here are some of the basics of algebra:",
    time: "2 min ago",
    img: GebraIcon1,
    copyIcon: CopyIcon,
    responses: [
      "Variables: In algebra, variables are symbols (usually letters) used to represent unknown quantities or values that can vary. Commonly used variables include x, y, and z.",
      "Expressions: An algebraic expression consists of variables, constants, and mathematical operations such as addition, subtraction, multiplication, and division. For example, 3x + 2y is an algebraic expression.",
      "Equations: An equation is a statement that asserts the equality of two expressions. It typically contains an equal sign (=). Solving equations involves finding the values of the variables that satisfy the equation. For example, solving the equation 2x + 5 = 11 would give x = 3.",
      "Terms: In an algebraic expression, terms are separated by addition or subtraction. A term can be a variable, a constant, or the product of variables and constants. In the expression 3x + 2y, 3x and 2y are the terms.",
      "Coefficients: The coefficient of a term is the numerical factor that multiplies the variable. In the expression 3x + 2y, the coefficients of x and y are 3 and 2, respectively.",
      "Simplification: Simplifying an algebraic expression involves combining like terms and performing operations such as addition, subtraction, multiplication, and division. For example, simplifying 3x + 2x would result in 5x.",
      "Linear equations: A linear equation is an equation in which the highest power of the variable is 1. The general form of a linear equation is ax + b = 0, where a and b are constants. Solving linear equations involves isolating the variable on one side of the equation. For example, solving 2x + 3 = 9 would give x = 3.",
      "Quadratic equations: A quadratic equation is an equation in which the highest power of the variable is 2. The general form of a quadratic equation is ax^2 + bx + c = 0, where a, b, and c are constants. Quadratic equations can have two solutions, one solution, or no real solutions.",
      "Inequalities: Inequalities compare two expressions and indicate that one is greater than, less than, or equal to the other. They use symbols such as > (greater than), < (less than), ≥ (greater than or equal to), and ≤ (less than or equal to). Solving inequalities involves finding the range of values that satisfy the",
    ],
    contents: []
  },
  {
    name: 'Tyler',
    desc: "What are the basics in Algebra?",
    time: "2 min ago",
    img: GebraIcon2,
    copyIcon: CopyIcon,
    responses: [],
    contents: []
  },
] 