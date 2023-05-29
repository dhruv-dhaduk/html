#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* get_string(char *prompt);
void freeptrs(char*, char*, char*, char*);

int main(void)
{
    char *s1, *s2, *s3, *s4, *s5, *name, *author, *year, *link;

    s1 = "\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class=\"book\">\n\t\t\t\t\t\t\t<h3>";
    s2 = "</h3>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li><b>Author</b>: ";
    s3 = "</li>\n\t\t\t\t\t\t\t\t<li><b>Published Year</b> : ";
    s4 = "</li>\n\t\t\t\t\t\t\t\t<li><a href=\"";
    s5 = "\" target=\"_blank\">Download</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\n";

    FILE *f = fopen("temp.txt", "w");

    while (1)
    {
        putchar('\n');
        name = get_string("Enter book name : ");
        if (strcmp(name, "0") == 0)
            break;
        author = get_string("Enter author name : ");
        year = get_string("Enter publish year : ");
        link = get_string("Enter link : ");

        fprintf(f, "%s%s%s%s%s%s%s%s%s", s1, name, s2, author, s3, year, s4, link, s5);
        freeptrs(name, author, year, link);
    }

    fclose(f);
    freeptrs(name, author, year, link);
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

void freeptrs(char* s1, char* s2, char* s3, char* s4)
{
    free(s1);
    free(s2);
    free(s3);
    free(s4);
}

/*

                    <li>
                        <div class="book">
                            <h3>Benjamin Franklin : An American Life</h3>
                            <ul>
                                <li><b>Author</b>: Walter Issacson</li>
                                <li><b>Published Year</b> : 2003</li>
                                <li><a href="https://drive.google.com/file/d/1-Y8TPT53ONrk7pcdWGfZr6oytfMVGghg/view?usp=share_link" target="_blank">Download</a></li>
                            </ul>
                        </div>
                    </li>


                    <li>
						<div class="book">
							<h3>Ben franklin					<li>
						<div class="book">
							<h3>walter issacson</li>
								<li><b>Published Year</b> : 2003</li>
								<li><a href="www.nothing.com" target="_blank">Download</a></li>
							</ul>
						</div>/n					</li>
                    
*/