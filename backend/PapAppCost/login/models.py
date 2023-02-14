from django.db import models


# Model for the table t_user_login
class User_Login(models.Model):
    id_user = models.AutoField(primary_key=True)
    email_user = models.CharField(max_length=255, blank=False)
    password_user = models.CharField(max_length=255, blank=False)
    record_date_table = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email_user
    
    def get_password(self):
        return self.password_user