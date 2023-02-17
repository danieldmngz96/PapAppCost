from django.db import models


# Creating model for the table login_t_user_login
class UserData(models.Model):
    id_user = models.AutoField(primary_key=True)
    email_user = models.CharField(max_length=255, blank=False)
    password_user = models.CharField(max_length=255, blank=False)
    name_user = models.CharField(max_length=255, blank=False, default="Pending")
    nickname_user = models.CharField(max_length=255, blank=False, default="Pending")
    country_user = models.CharField(max_length=150, blank=False)
    province_user = models.CharField(max_length=150, blank=False)
    city_user = models.CharField(max_length=150, blank=False)
    birth_date_user = models.DateField(max_length=10, blank=False)  #YYYY-MM-DD
    level_studies_user = models.CharField(max_length=15, blank=False)
    record_date_table = models.DateTimeField(auto_now_add=True)


    # Function to get just the login data
    def login_data(self):
        login_data_list = [self.email_user, self.password_user]
        return login_data_list

