# Generated by Django 5.0.6 on 2024-06-16 14:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='role',
            new_name='user',
        ),
    ]
