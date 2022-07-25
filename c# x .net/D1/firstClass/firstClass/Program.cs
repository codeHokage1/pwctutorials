// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

int x = 2;
int y = 3;
int z = x + y;
decimal a = 4.5m;

//Console.WriteLine($"Sum of {x} and {y} = {z}");


bool flag = true;
char myCharacter = 'a';
// Console.WriteLine(z);
string colorOfPaint = "white";
DateTime today = DateTime.Now;
DateTime myBirthday = Convert.ToDateTime("01/12/1800");



// Menu Task
/* Console.WriteLine("Welcome to PWC Bootcamp!\n");
Console.WriteLine("Choose option:\n1. Get className address\n2. Get courses for track\n");
int firstOption = int.Parse(Console.ReadLine());
switch (firstOption)
{
    case 1: Console.WriteLine("Select Track:\n1. Full Stack\n2. Data Science\n");
        int addressOption = int.Parse(Console.ReadLine());
        switch (addressOption)
        {
            case 1: Console.WriteLine("1400, Tiamiyu Savage, VI"); break;
            case 2: Console.WriteLine("PWC Experience Center, VI"); break;
        }
        break;
    case 2:
        Console.WriteLine("Select Track:\n1. Full Stack\n2. Data Science\n");
        int addressOption2 = int.Parse(Console.ReadLine());
        switch (addressOption2)
        {
            case 1: Console.WriteLine("You'd learn C#, .NET, JavaScript, React and others"); break;
            case 2: Console.WriteLine("You'd learn Python, Power BI, Tableau, and others"); break;
        }
        break;
    default:
        Console.WriteLine("Option Not Recognized!");
        break;
} */

// Calculator Task

Console.WriteLine("Welcome to a Calculator!\n");
bool stillCalculating = true;

while (stillCalculating)
{
    Console.WriteLine("Enter your first number: ");
    int firstNum = Convert.ToInt32(Console.ReadLine());
    Console.WriteLine("What do you want to do:\n1. +\n2. -\n3. *\n4. /\n ");
    int operation = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine("Enter your second number: ");
    int secondNum = Convert.ToInt32(Console.ReadLine());

    switch (operation)
    {
        case 1:
            Console.WriteLine($"{firstNum} + {secondNum} = {firstNum + secondNum}");
            break;
        case 2:
            Console.WriteLine($"{firstNum} - {secondNum} = {firstNum - secondNum}");
            break;
        case 3:
            Console.WriteLine($"{firstNum} x {secondNum} = {firstNum * secondNum}");
            break;
        case 4:
            Console.WriteLine($"{firstNum} / {secondNum} = {firstNum / secondNum}");
            break;
        default:
            Console.WriteLine("Operator Not Recognized!");
            break;
    }
    Console.Write("Do you want to perform another operation? (y/n): ");
    char choice = Convert.ToChar(Console.ReadLine());
    if (choice == 'n') { 
        Console.WriteLine("Thank you for using the calculator!\n");
        stillCalculating = false;
    }

}
