#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* get_string(char *prompt);

int main(void)
{
    char *s1 = "<li> ";
    char *s2 = " <a href=\"";
    char *s3 = "\" target=\"_blank\"><img src=\"../res/youtube.jpg\"></a> </li>";

    char *name;
    char *link;

    FILE *f = fopen("temp.txt", "w");

    while (1)
    {
        name = get_string("Enter name : ");
        if (strcmp(name, "0") == 0)
            break;
        link = get_string("Enter link : ");

        fprintf(f, "%s%s%s%s%s\n\t\t\t", s1, name, s2, link, s3);
        putchar('\n');
        free(name);
        free(link);
    }
    

    fclose(f);

    free(name);
    free(link);

    return 0;
}

char* get_string(char *prompt)
{
    int count = 0;
    char *s = malloc(1 * sizeof(char));
    char c;
    printf("%s", prompt);
    while (1)
    {
        c = getchar();
        count++;
        s = realloc(s, count * sizeof(char));

        if (c == '\n')
        {
            s[count - 1] = '\0';
            break;
        }
        else
        {
            s[count - 1] = c;
        }
    }

    return s;
}

// <li>  <a href="" target="_blank"><img src="res/youtube.jpg"></a> </li>