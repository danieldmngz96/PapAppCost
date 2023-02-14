from django.db import models


# Creating model for the table login_t_user_login
class UserLogin(models.Model):
    id_user = models.AutoField(primary_key=True)
    email_user = models.CharField(max_length=255, blank=False)
    password_user = models.CharField(max_length=255, blank=False)
    record_date_table = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email_user