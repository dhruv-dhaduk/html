#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* get_string(char *prompt);

int main(void)
{
    char *s1 = "<li> ";
    char *s2 = " <a href=\"";
    char *s3 = "\" target=\"_blank\"><span class=\"yt\"></span></a> </li>";

    char *name = malloc(100 * sizeof(char)); 
    char *yt = malloc(100 * sizeof(char));

    if (name == NULL || yt == NULL)
    {
        printf("Couldn't malloc\n");
        return 1;
    }
    char c;

    FILE *songs = fopen("../data/songs.txt", "r");
    FILE *f = fopen("temp.txt", "w");

    while (1)
    {
        int ni = 0;
        int li = -1;
        while (1)
        {
            c = fgetc(songs);
            if (c == EOF)
                break;
            else if (c == '\n')
            {
                yt[li] = 0;
                li = -2;
                break;
            }
            else if (c == ',')
            {
                name[ni] = 0;
                ni = -2;
                li = 0;
            }
            else
            {
                if (ni >= 0)
                {
                    name[ni] = c;
                    ni++;
                }
                else if (li >= 0)
                {
                    yt[li] = c;
                    li++;
                }
                else
                    break;
            }

        }
        if (ni != -2 || li != -2)
            break;
        
        fprintf(f, "%s%s%s%s%s\n", s1, name, s2, yt, s3);
    }

    fclose(f);
    fclose(songs);

    free(name);
    free(yt);

    printf("Done\n");
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

// <li>  <a href="" target="_blank"><span id="special"></span></a> </li>

// <li>  <a href="" target="_blank"><img src="res/youtube.jpg"></a> </li>
