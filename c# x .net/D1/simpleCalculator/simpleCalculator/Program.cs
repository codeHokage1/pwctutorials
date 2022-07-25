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
    if (choice == 'n')
    {
        Console.WriteLine("Thank you for using the calculator!\n");
        stillCalculating = false;
    }

}

